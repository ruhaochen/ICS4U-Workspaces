const students = [
    { name: "Alice", grade: 85, age: 17 },
    { name: "Bob", grade: 92, age: 18 },
    { name: "Charlie", grade: 78, age: 16 },
    { name: "David", grade: 95, age: 17 },
    { name: "Eva", grade: 88, age: 18 }
  ];
  

  
  // 1. Sort: Sort students by grade (descending order)

  students.sort((i, x) => x.grade - i.grade);
  console.log(students);

  // 2. Map: Create a new array of just the students' names

  const names = students.map(i => i.name);
  console.log(names);
  
  // 3. Filter: Get students who scored 90 or above

  const smartPeople = students.filter(i => i.grade >= 90); 
  console.log(smartPeople);
  
  // 4. forEach: Print out each student's name and grade
  students.forEach(i => console.log(i.name, i.grade)); 
  