

async function tampilCharacter(input,classIn,maxRange) {
    try{
        const character = await getCharacter();
        console.log(character)
        let cards = [];
        let card = "";
        for(x of character) {
            if(cards.length == maxRange) {
                break;
            } 
            
            if(x.name.toLowerCase().includes(input.toLowerCase()) && 
            classIn == x.class) {
                card += tampilCard(x)
                cards.push(x)
            }
        }
        const nameContainer = document.querySelector(".name-container");
        if(cards.length == 0) {
            card = kosongTemp()
        }
        nameContainer.innerHTML = card;
    } catch(err) {
        console.log(err)
    }
}

function tampilCard(name) {
   return  `<div class="col md-4 my-5">
                <div class="card" style="width: 15rem;">   
                    <div class="img-container text-center">
                        <img src=${name.img} class="card-img-top img-size" alt="...">
                    </div>
                    <div class="card-body">
                    <h5 class="card-title">${name.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${name.class}</h6>
                    <a href="#" class="btn btn-primary modal-detail-btn" data-bs-toggle="modal" 
                    data-bs-target="#nameDetailModal" data-nameid="${name.id}">Detail</a>
                    </div>
                </div>
            </div>`
}

function kosongTemp(){
    return `<h1 class="kosong">Nama tidak ditemukan</h1>`
}

async function tampilDetail(nameid) {
    try {
        const detailChara = await getCharacter();
        const detail = detailChara.find(e => e.id == nameid)
        const modalBody = document.querySelector(".modal-body")
        modalBody.innerHTML = printDetail(detail);
    } catch(err) {
        console.log(err)
    }
    
}


function printDetail(detailChara) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-med-3">
                        <img src="${detailChara.img}" class="img-fluid">
                    </div>
                    <div class="col-med detail">
                    <ul class="list-group ">
                        <li class="list-group-item clr-secondary clr-name"><h4>${detailChara.name}</h4></li>
                        <li class="list-group-item clr-third"><strong>Class:</strong>${detailChara.class}</li>
                        <li class="list-group-item clr-third"><strong>HP:${detailChara.hp} </strong></li>
                        <li class="list-group-item clr-third"><strong>Atk: </strong>${detailChara.atk}</li>
                        <li class="list-group-item clr-third"><strong>Ability: </strong>${detailChara.ability}</li>
                     </ul>
                    </div>
                </div>
            </div>`
}

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal-detail-btn")) {
        const nameid = e.target.dataset.nameid;
        tampilDetail(nameid)
    }
    if(e.target.classList.contains("btn-search")) {
        const input = document.querySelector(".input-keyword");
        const classIn = document.querySelector(".class-select");
        const maxRange = document.querySelector(".input-number")
        tampilCharacter(input.value,classIn.value,maxRange.value)
    }
})

function getCharacter() {
    return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        const response = JSON.parse(this.responseText);
        if(response) {
            resolve(response)
        } else {
            reject(new Error("gagal ambil data"))
        }
    }
    xhr.open("GET", "character.json")
    xhr.send()
    })    
}

function getDetail() {
    return  new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            const response = JSON.parse(this.responseText);
            if(response) {
                resolve(response)
            } else {
                reject(new Error("gagal ambil data"))
            }
        }
        xhr.open("GET","https://jsonplaceholder.typicode.com/comments");
        xhr.send()
    })
}
