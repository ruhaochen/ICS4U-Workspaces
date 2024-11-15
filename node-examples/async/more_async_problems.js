// Question 1
async function getTopPosts(){
    let data = await fetch('https://www.reddit.com/r/javascript/top.json?limit=10', {method : "GET"});
    let json = await data.json();

    let extracted = json.map(post => {
        post.data.children.data.title
    })
    console.log(extracted);
}
//getTopPosts();

// Question 3
async function countCountriesByRegion(){
    let data = await fetch('https://restcountries.com/v3.1/all');
    let json = await data.json();

    let extracted = json.reduce((acc, country) => {
        if(!acc[country.region]){
            acc[country.region] = 0;
        }
        acc[country.region]++; 
        return acc;
    }, {})
    console.log(extracted);
}
// countCountriesByRegion();

let hi = {
    a: 'sup',
    b: 'hello',
    c: 'howdy'
}
// if(!hi[8]){
//     hi[7] = 'bonjour';
//     hi[8] = 'aloha';
// }
// console.log(hi);
for (const key in hi) {
    console.log(hi[key]);
}