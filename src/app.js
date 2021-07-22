// let generateRandom = document.getElementById("generateRandom");
let nameDiv = document.getElementById("nameDiv");
let namepara = document.getElementById("name");

const generateName = () => {
    let randomName = team[Math.floor(Math.random() * team.length)];
    // console.log(randomName.name);
    // namepara.innerHTML = randomName.name;
    displayOnDOM(createDiv(randomName));
}




const createDiv=(team) =>{
    const card=
        `<div class="card" style="width: 18rem;" id="${team.empid}">
            <div class="card-body">
                <h5 class="card-title">'${team.name}'</h5>
                <h6>'${team.company}'</h6>
                <a href="#" class="btn btn-primary">View Profile</a>
                <button class="btn btn-danger")">
                    X
                </button>
            </div>
        </div>`;
        // console.log(card);
    return card;
}
const displayOnDOM =(markup) =>{
    namepara.innerHTML =markup;
}
