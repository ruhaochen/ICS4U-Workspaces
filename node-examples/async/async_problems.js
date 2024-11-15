// Question 1
async function fetchListOfUsers(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {method : "GET"});
    let json = await response.json();
    let users = json.map(user => user.name);
    console.log(users);
    //json.map(x => console.log(x.name));
}
// fetchListOfUsers();

// Question 2
async function filterPosts(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {method : "GET"});
    let json = await response.json();
    let postNames = json.filter(post => post.id === 3).map(name => name.title);
    console.log(postNames);
    //json.map(x => console.log(x.name));
}
//filterPosts();

// Question 3
async function totalLengthOfAllUsers(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {method : "GET"});
    let json = await response.json();
    let length = json.reduce((acc, user) => acc + user.username.length, 0);
    console.log(length);
}
//totalLengthOfAllUsers(); 

// Question 4
async function groupPosts(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {method : "GET"});
    let json = await response.json();
    let groupedPosts = json.reduce((acc, post) => {
        if(!acc[post.userId])
            acc[post.userId] = [];
        acc[post.userId].push(post.title);
        return acc;
    }, {});
    console.log(groupedPosts); 
}
groupPosts(); 

// Question 5
async function countTODO(){
    
}
