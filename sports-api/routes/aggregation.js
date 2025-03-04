import express from 'express';
import {connectDB} from '../config/db.js';
const router = express.Router();

// 1. Count the Total Number of Players
router.get('/total-players', async (req, res) => {
    try {
        const db = await connectDB();
        const result = await db.collection ('players').aggregate([
            { $count: "totalPlayers" }
        ]).toArray();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error counting players", error });
    }
});

// 2. Average Age of Players per Team
router.get('/average-age', async (req, res) => {
    try {
        const db = await connectDB();
        const result = await db.collection ('players').aggregate([
            { $group: { _id: "$team", averageAge: { $avg: "$age" } } }
        ]).toArray();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error calculating average age", error });
    }
});

// 3. List Players with Their Team and Position
router.get('/players-with-team', async (req, res) => {
    try {
        const db = await connectDB();
        const result = await db.collection ('players').aggregate([
        { $project: { _id: 0, name: 1, team: 1, position: 1 } } 
        ]).toArray();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving players", error });
    }
}); 

// 4. Find the Top 5 Players with the Highest Age 
router.get('/oldest-players', async (req, res) => {
    try {
        const db = await connectDB();
        const result = await db.collection ('players').aggregate([
            { $sort: { age: -1 } },
            { $limit: 5 }
        ]).toArray();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error finding oldest players", error });
    }
});

// 5. Get Total Matches Played by Each Team (Home and Away)
router.get('/total-matches', async (req, res) => {
    try {
        const db = await connectDB();
        const result = await db.collection ('matches').aggregate([
            { $facet: {
                homeGames: [
                    { $group: { _id: "$home_team", totalHomeGames: { $sum: 1 } } }
                ],
                awayGames: [
                    {$group: { _id: "$away_team", totalAwayGames: { $sum: 1 } } }
                ]
            }  
            }
        ]).toArray();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error counting matches", error });
    }
}); 

// 6. Count Wins for Each Team
router.get('/wins-per-team', async (req, res) => {
    try {
      const db = await connectDB();
      const result = await db.collection('matches').aggregate([
        {
          $lookup: {
            from: 'scores',          
            localField: '_id',       
            foreignField: 'match_id', 
            as: 'match_scores'       
          }
        },
        { 
            $unwind: '$match_scores' 
        },
        {
          $facet: {
            homeWins: [
              {
                $match: {
                  $expr: {
                    $gt: ['$match_scores.home_score', '$match_scores.away_score'] // Home team wins if home_score > away_score
                  }
                }
              },
              { $group: { _id: '$home_team', wins: { $sum: 1 } } } // Count wins for home team
            ],
            awayWins: [
              {
                $match: {
                  $expr: {
                    $gt: ['$match_scores.away_score', '$match_scores.home_score'] // Away team wins if away_score > home_score
                  }
                }
              },
              { $group: { _id: '$away_team', wins: { $sum: 1 } } } // Count wins for away team
            ]
          }
        },
        {
          $project: {
            totalWins: { $concatArrays: ['$homeWins', '$awayWins'] }
          }
        },
        { 
          $unwind: '$totalWins' 
        },
        {
          $group: {
            _id: '$totalWins._id',  // Team name
            wins: { $sum: '$totalWins.wins' } // Total wins for each team
          }
        },
        { 
          $sort: { wins: -1 } 
        }
      ]).toArray();
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Error counting wins', error });
    }
  });
    
// 7. Get Total Score by Team (Home and Away)
router.get('/total-score-by-team', async (req, res) => {
    try {
        const db = await connectDB();
        const result = await db.collection ('matches').aggregate([
            { $group: {
                _id: "$home_team",
                totalHomeScore: { $sum: "$home_score" },
                totalAwayScore: { $sum: "$away_score" }
              }
            }
        ]).toArray();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error calculating total score", error });
    }
});

// 8. Find Players Who Have Played More Than 10 Matches
router.get('/players-more-than-10-matches', async (req, res) => {
    try {
        const db = await connectDB();
        const result = await db.collection('matches').aggregate([
            { $lookup: {
                from: "players",
                localField: "home_team",
                foreignField: "team",
                as: "homePlayers"
              }
            },
            { $unwind: "$homePlayers" },
            { $group: { 
                _id: "$homePlayers.name", 
                matchCount: { 
                    $sum: 1 
                } 
              } 
            },
            { $match: {matchCount: {$gt: 10 } } }
        ]).toArray();
        res.json(result);
    }catch (error) {
        res.status(500).json({ message: "Error retrieving players", error });
    }      
}); 

// 9. Find the Most Scored Player
router.get('/most-scored-player', async (req, res) => {
    try {
        const db = await connectDB();
        const result = await db.collection('matches').aggregate([
            { $lookup: {
                from: "players",
                localField: "home_team",
                foreignField: "team",
                as: "homePlayers"
            }
            },
            { $unwind: "$homePlayers" },
            { $group: {
                _id: "$homePlayers.name",
                totalGoals: { $sum: "$home_score" }
            }
            },
            { $sort: {totalGoals: -1 } },
            { $limit: 1 }
        ]).toArray();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error finding top scorer", error });
    }
});

// 10. List Teams That Played More Than 10 Matches
router.get('/teams-more-than-10-matches', async (req, res) => {
    try {
        const db = await connectDB();
        const result = await db.collection('matches').aggregate([
            { $group: {
                _id: { $concat: ["$home_team", "-", "$away_team"] },
                matchCount: { $sum: 1 }
            }
            },
            {$match: {matchCount: {$gt: 10}}}
        ]).toArray();
        res.json(result);
    } catch (error) {
         res.status(500).json({ message: "Error counting teams' matches", error });
    }
});

//Delete this later

router.get('/patients/aggregated-diagnosis', async (req, res) => {
  try {
      const db = await connectDB();
      const result = await db.collection ('Patients').aggregate([
          {
            $unwind: {
              path: "$medical_history",
            },
          },
          {
            $group: {
              _id: "$medical_history",
              numPatients: {
                $sum: 1,
              }
            }
          },
          {
            $sort: {
              numPatients: -1
            }
          }
        ]).toArray();
      res.json(result);
  } catch (error) {
      res.status(500).json({ message: "Error finding most common diagnosis", error });
  }
});


export default router; 
