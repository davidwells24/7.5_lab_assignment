async function fetchData() {
    const response1 = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response1.json();
    let randomIndex = Math.floor(Math.random() * 10);
    this.name = data[randomIndex].name;

    const response2 = await fetch('https://dummyjson.com/recipes');
    data = await response2.json();
    randomIndex = Math.floor(Math.random() * 30);
    this.recipe = data['recipes'][randomIndex].name;
};