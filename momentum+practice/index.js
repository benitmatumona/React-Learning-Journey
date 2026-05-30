const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")

const data = await response.json()

console,console.log(data.body);
