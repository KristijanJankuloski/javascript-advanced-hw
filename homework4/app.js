function createRow(item){
    const newRow = document.createElement("tr");
    const colName = document.createElement("td");
    const colPopulation = document.createElement("td");
    const colClimate = document.createElement("td");
    const colGravity = document.createElement("td");
    colName.innerText = item.name;
    colPopulation.innerText = item.population;
    colClimate.innerText = item.climate;
    colGravity.innerText = item.gravity;
    newRow.appendChild(colName);
    newRow.appendChild(colPopulation);
    newRow.appendChild(colClimate);
    newRow.appendChild(colGravity);
    return newRow;
}

function renderList(list){
    document.querySelector(".sw-table").classList.remove("hidden");
    const tableBody = document.querySelector("#table-content");
    tableBody.innerHTML = "";
    for(let item of list){
        tableBody.appendChild(createRow(item));
    }
}

function createNextButton(url){
    const nextBtn = document.createElement("button");
    nextBtn.className = "btn";
    nextBtn.innerText = "Next Page";
    nextBtn.addEventListener('click', ()=> {
        getData(url);
    });
    return nextBtn;
}

function createPreviousButton(url){
    const prevBtn = document.createElement('button');
    prevBtn.className = "btn";
    prevBtn.innerText = "Previous Page";
    prevBtn.addEventListener('click', () =>{
        getData(url);
    });
    return prevBtn;
}

async function getData(url){
    let result = await fetch(url);
    let data = await result.json();
    const actionCont = document.querySelector(".action-container");
    actionCont.innerHTML = "";
    if(data.previous)
        actionCont.appendChild(createPreviousButton(data.previous));
    const pageNumber = document.createElement("span");
    pageNumber.innerText = url.slice(-1);
    actionCont.appendChild(pageNumber);
    if(data.next)
        actionCont.appendChild(createNextButton(data.next));
    renderList(data.results);
}

document.querySelector('#get-planets').addEventListener('click', ()=>{
    getData("https://swapi.dev/api/planets/?page=1");
});