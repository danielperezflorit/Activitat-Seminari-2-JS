async function fetchData(){
    const usuaris = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
    
    const usuari = await usuaris
    .filter((usuaris) => usuaris.id == 4); //Ver solo los datos del usuario con id = 4
    
    console.log(usuari);


    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());

    const posts4 = await posts
    .filter((post) => post.userId == 4) //Filtra solo los posts del usuario con id = 4
    .map((post) => {return `${post.id} ${post.title}`;})//Muestra el id y el titulo de las obras
    .sort((a,b)=> a.title > b.title? 1 : -1); //Ordena los posts por orden alfabetico
    console.log(posts4);

}
fetchData();