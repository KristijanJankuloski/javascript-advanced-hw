function createPeopleRow(person){
    const row = document.createElement("tr");

    const rowName = document.createElement("th");
    rowName.scope = "row";
    rowName.innerText = person.name;
    row.appendChild(rowName);

    const rowHeight = document.createElement("td");
    rowHeight.innerText = person.height;
    row.appendChild(rowHeight);

    const rowMass = document.createElement("td");
    rowMass.innerText = person.mass;
    row.appendChild(rowMass);

    const rowGender = document.createElement("td");
    rowGender.innerText = person.gender;
    row.appendChild(rowGender);

    const rowBirth = document.createElement("td");
    rowBirth.innerText = person.birth_year;
    row.appendChild(rowBirth);

    const rowCount = document.createElement("td");
    rowCount.innerText = person.films.length;
    row.appendChild(rowCount);
    return row;
}

function createShipsRow(ship){
    const row = document.createElement("tr");

    const rowName = document.createElement("th");
    rowName.scope = "row";
    rowName.innerText = ship.name;
    row.appendChild(rowName);

    const rowModel = document.createElement("td");
    rowModel.innerText = ship.model;
    row.appendChild(rowModel);

    const rowManufacturer = document.createElement("td");
    rowManufacturer.innerText = ship.manufacturer;
    row.appendChild(rowManufacturer);

    const rowCost = document.createElement("td");
    rowCost.innerText = ship.cost_in_credits;
    row.appendChild(rowCost);

    const rowCapacity = document.createElement("td");
    if(ship.crew === "unknown" || ship.passengers === "unknown"){
        rowCapacity.innerText = "unknown";
    }
    else{
        rowCapacity.innerText = parseCapacity(ship.crew) + parseCapacity(ship.passengers);
    }
    row.appendChild(rowCapacity);

    const rowClass = document.createElement("td");
    rowClass.innerText = ship.starship_class;
    row.appendChild(rowClass);
    return row;
}

// PAGINATION
function createPagination(previous, next, current, callFunc){
    const pagination = document.createElement("ul");
    pagination.className = "pagination";
    const previousPage = document.createElement("li");
    previousPage.className = "page-item";
    const previousPageLink = document.createElement("span");
    // PREVIOUS PAGE
    previousPageLink.className = "page-link";
    previousPageLink.innerText = "Previous";
    previousPage.appendChild(previousPageLink);
    pagination.appendChild(previousPage);
    if(previous){
        previousPage.addEventListener('click', () => {
            callFunc(previous);
        });
        previousPage.classList.add("hover-page");
    }
    else {
        previousPage.classList.add("disabled");
    }
    // CURRENT PAGE
    const currentPage = document.createElement("li");
    const currentPageText = document.createElement("p");
    currentPage.className = "page-item";
    currentPageText.className = "page-link";
    currentPageText.innerText = current;
    currentPage.appendChild(currentPageText);
    pagination.appendChild(currentPage);
    // NEXT PAGE
    const nextPage = document.createElement("li");
    nextPage.className = "page-item";
    const nextPageLink = document.createElement("span");
    nextPageLink.className = "page-link";
    nextPageLink.innerText = "Next";
    nextPage.appendChild(nextPageLink);
    pagination.appendChild(nextPage);
    if(next){
        nextPage.addEventListener('click', () => {
            callFunc(next);
        });
        nextPage.classList.add("hover-page");
    }
    else {
        nextPage.classList.add("disabled");
    }
    return pagination;
}

function createPeopleTable(list, previous, next, current){
    const container = document.querySelector("#people-col");
    container.innerHTML = "";
    const tableContainer = document.createElement("div");
    tableContainer.className = "container-fluid";
    const table = document.createElement("table");
    table.classList.add("table", "table-striped");
    // TABLE HEAD
    const tableHead = document.createElement("thead");
    tableHead.innerHTML = `<tr>
    <th scope="col">Name</th>
    <th scope="col">Height</th>
    <th scope="col">Mass</th>
    <th scope="col">Gender</th>
    <th scope="col">Birth Year</th>
    <th scope="col">Appearances</th>
    </tr>`;
    table.appendChild(tableHead);
    // TABLE BODY
    const tableBody = document.createElement("tbody");
    for(let person of list){
        tableBody.appendChild(createPeopleRow(person));
    }
    table.appendChild(tableBody);
    tableContainer.appendChild(table);
    tableContainer.appendChild(createPagination(previous, next, current, getPeoplePage));
    container.appendChild(tableContainer);
}

function createShipsTable(list, previous, next, current){
    const container = document.querySelector("#ships-col");
    container.innerHTML = "";
    const tableContainer = document.createElement("div");
    tableContainer.className = "container-fluid";
    const table = document.createElement("table");
    table.classList.add("table", "table-striped");
    // TABLE HEAD
    const tableHead = document.createElement("thead");
    tableHead.innerHTML = `<tr>
    <th scope="col">Name</th>
    <th scope="col">Model</th>
    <th scope="col">Manufacturer</th>
    <th scope="col">Cost</th>
    <th scope="col">Max Capacity</th>
    <th scope="col">Class</th>
    </tr>`;
    table.appendChild(tableHead);
    const tableBody = document.createElement("tbody");
    for(let ship of list){
        tableBody.appendChild(createShipsRow(ship));
    }
    table.appendChild(tableBody);
    tableContainer.appendChild(table);
    tableContainer.appendChild(createPagination(previous, next, current, getShipsPage));
    container.appendChild(tableContainer);
}

async function getPeoplePage(url){
    const res = await fetch(url);
    const data = await res.json();
    createPeopleTable(data.results, data.previous, data.next, url.split('').pop());
}

async function getShipsPage(url){
    const res = await fetch(url);
    const data = await res.json();
    createShipsTable(data.results, data.previous, data.next, url.split('').pop());
}

function parseCapacity(num){
    if(num === 'n/a'){
        return 0;
    }
    if(num.includes("-")){
        let temp = num.split("-");
        num = temp[1];
    }
    num = num.replaceAll(",", "");
    return Number(num);
}

async function personBtnClick(){
    const res = await fetch("https://swapi.dev/api/people/?page=1");
    const data = await res.json();
    document.querySelector("#people-col").className = "col-10 d-flex justify-content-center";
    const shipsCol = document.querySelector("#ships-col");
    shipsCol.className = "col d-flex justify-content-center";
    shipsCol.innerHTML = `<img src="./img/space-ship.svg" alt="ship" class="img-fluid w-50 p-2 img-hover" id="ship-btn">`;
    document.querySelector("#ship-btn").addEventListener('click', shipBtnClick);
    createPeopleTable(data.results, data.previous, data.next, 1);
}

async function shipBtnClick(){
    const res = await fetch("https://swapi.dev/api/starships/?page=1");
    const data = await res.json();
    document.querySelector("#ships-col").className = "col-10 d-flex justify-content-center";
    const peopleCol = document.querySelector("#people-col");
    peopleCol.className = "col d-flex justify-content-center";
    peopleCol.innerHTML = `<img src="./img/person.svg" alt="person" class="img-fluid w-50 p-2 img-hover" id="person-btn"></img>`;
    document.querySelector("#person-btn").addEventListener('click', personBtnClick);
    createShipsTable(data.results, data.previous, data.next, 1);
}

document.querySelector("#person-btn").addEventListener('click', personBtnClick);
document.querySelector("#ship-btn").addEventListener('click', shipBtnClick);
document.querySelector('#home-btn').addEventListener('click', (event)=>{
    event.preventDefault();
    location.reload();
});