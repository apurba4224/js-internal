function doSOmething() {
    console.log('Third')
}
console.log('first')
console.log('second')
// setTimeout(doSOmething, 4000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log('Fourth')
console.log('Fifth')
