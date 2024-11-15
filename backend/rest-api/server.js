import express, { urlencoded } from 'express';

const app = express();
const PORT = process.env.PORT || 5000 ;

//Data
let students = [
    {id: 1, name: 'Mobin', age: 60},
    {id: 2, name: 'Jeff', age: 39},
    {id: 3, name: 'Bob', age: 12},
    {id: 4, name: 'Kevin', age: 15} 
]

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get('/api/students', (req, res) => {
    res.send(students);
});

app.get('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if(!student){
        return res.status(404).send('Student not found.');
    }
    res.send(student); 
});

app.post('/api/students', (req, res) =>{
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(student);
    res.send(student); 
}); 

app.put('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id)); 
    if(!student){
        return res.status(404).send('Student not found.'); 
    }

    student.name = req.body.name;
    student.age = req.body.age; 

    res.send(student); 
}); 

app.delete('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if(!student){
        return res.status(404).send('Student not found.');
    }
    
    const index = students.indexOf(student);
    students.splice(index, 1);

    res.send(student); 

});

//Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));