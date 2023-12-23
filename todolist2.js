
let data = JSON.parse(localStorage.getItem('object')) || []

function redAll(){ 
    var tabledata = document.querySelector('.parent');
    var tabledata1 = document.querySelector('.parent1')
    var tabledata2 = document.querySelector('.parent2')

    // console.log(data);

    tableau1 = []
    tableau2 = []
    tableau3 = []

    var element = "";
    var element1 = "";
    var element2 = "";

    for (let index = 0; index < data.length; index++) {
        if (data[index].status == "new") {
            tableau1[index] = data[index] 
        }
    }

    for (let index = 0; index < data.length; index++) {
        if (data[index].status == "progress") {
            tableau2[index] = data[index] 
        }
    }

    for (let index = 0; index < data.length; index++) {
        if (data[index].status == "done") {
            tableau3[index] = data[index] 
        }
    }
    // console.log(tableau1); 
    // console.log(tableau2);
    // console.log(tableau3);
    
    tableau1.map(record => (
        element += `<div class="mt-5 bg-white rounded-xl shadow-2xl hover:border-cyan-400 hover:border-2">
        <div class="flex justify-between p-3 ">
            <h5 class="block font-bold">${record.ActivName}</h5>
            
        </div>
        <div class="px-3 ml-6 justify-between flex">
            ${record.datetime} <span class ="ml-2" onclick="progress(${record.activId})"><i class="bi bi-arrow-right-circle-fill text-green-400"></i></span>
        </div>
        <div class="flex p-2 justify-between flex">
            <span class="mr-2"><img id="image1" src="istockphoto-1181034192-170667a.jpg" alt="" srcset=""></span><span>${record.priority}</span><span onclick="deleteTodo(${record.activId})" class="cursor-pointer"><i class="bi bi-trash3 text-red-300"></i></span>
        </div>
    </div>`
    ))
    
    tableau2.map(record => (
        element1 += `<div class="mt-5 bg-white rounded-xl shadow-2xl hover:border-cyan-400 hover:border-2">
        <div class="flex justify-between p-3 rounded-t-xl"> 
            <h5 class="block font-bold">${record.ActivName}</h5>
            
        </div>
        <div class="px-3 ml-6 justify-between flex">
            ${record.datetime} <span class ="ml-2" onclick="done(${record.activId})"><i class="bi bi-arrow-right-circle-fill text-green-400"></i></span>
        </div>
        <div class="flex p-2 justify-between">
            <span class="mr-2"><img id="image1" src="istockphoto-1181034192-170667a.jpg" alt="" srcset=""></span><span>${record.priority}</span><span onclick="deleteTodo(${record.activId})" class="cursor-pointer"><i class="bi bi-trash3 text-red-300"></i></span>
        </div>
    </div>`
    ))

    tableau3.map(record => (
        element2 += `<div class="mt-5 bg-white rounded-xl shadow-xl hover:border-cyan-400 hover:border-2">
        <div class="flex justify-between p-3 bg-green-200 rounded-t-xl">
            <h5 class="block font-bold text-green-700"><i class="bi bi-check-circle-fill text-green-700 mr-2"></i>${record.ActivName}</h5>
        </div>
        <div class="px-3 ml-6 justify-between flex">
            ${record.datetime} <span class ="ml-2" onclick="deleteTodo(${record.activId})"><i class="bi bi-trash-fill text-red-500"></i></span>
        </div>
        <div class="flex p-2 justify-between">
            <span class="mr-2"><img id="image1" src="istockphoto-1181034192-170667a.jpg" alt="" srcset=""></span><span>${record.priority}</span>
        </div>
    </div>`
    ))

    tabledata.innerHTML = element;
    tabledata1.innerHTML = element1;
    tabledata2.innerHTML = element2;
}

function create(){

    let activId = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

    let ActivName = document.querySelector('#ActivName')
    let datetime = document.querySelector('#datetime')
    let nameSiteActivity = document.querySelector('#nameSiteActivity')
    let priority = document.querySelector('#priority')

    const id = generateId()
    let name = ActivName.value
    let date = datetime.value
    let site = nameSiteActivity.value
    let pri = priority.value
    const stat = "new";
     
    if ((activId.length = 0) || (ActivName.length = 0 ) || (nameSiteActivity.length = 0)||(priority.length = 0) || (datetime.length = 0)) {
        alert('veuiller entrer tous les champs du formulaire')
    }
        var newObj = {activId:id, ActivName:name, datetime:date, nameSiteActivity:site, priority:pri, status:stat}
        data.push(newObj)
        localStorage.setItem('object', JSON.stringify(data));
        redAll();
}


function chercher(activId){
    for (let i = 0; i < data.length; i++) {
        if (data[i].activId == activId) {
            return i
        }
    }
}

function progress(activId){
    data[chercher(activId)].status = "progress"
    localStorage.setItem('object', JSON.stringify(data));
    console.log(data[chercher(activId)]);
    redAll();
}

function done(activId){
    data[chercher(activId)].status = "done"
    localStorage.setItem('object', JSON.stringify(data));
    console.log(data[chercher(activId)]);
    redAll();
}

function deleteTodo(activId){
    data.splice(chercher(activId),1)
    localStorage.setItem('object', JSON.stringify(data));
    redAll();
}

function generateId() {
    let id = '' + new Date().getTime()
    return id;
}
console.log(generateId());
console.log(generateId());