const movies = ["Pulp Fiction", "Lord of the Rings", "The Dark Knight"];

function searchMovies(search){
    let resultArr = [];
    for(let movie of movies){
        if(movie.toLowerCase().includes(search.toLowerCase())){
            resultArr.push(movie);
        }
    }
    return resultArr;
}

document.querySelector("#searchInput").addEventListener("input", e => {
    let search = e.target.value;
    console.log(search);
    const list = document.querySelector(".auto-comp-list");
    list.innerHTML = "";
    for(let item of searchMovies(search)){
        const newItem = document.createElement("li");
        newItem.innerText = item;
        list.appendChild(newItem);
    }
});