async function test(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method : "GET"
    });
    console.log(response);
    let json = await response.json();
    console.log(json);
}

test();