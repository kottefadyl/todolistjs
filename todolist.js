let data = [
    {activId:1, ActivName:"programmation", datetime: "lundi 3 janvier", nameSiteActivity: "paris", priority:"higth",status:"new"},
    {activId:2, ActivName:"school", datetime: "lundi 3 octobre", nameSiteActivity: "france", priority:"higth",status:"new"},
    {activId:3, ActivName:"sport", datetime: "lundi 3 decembre", nameSiteActivity: "france", priority:"higth",status:"new"}
]

let data1 = [
    {activId:4, ActivName:"apprendre a grandir", datetime: "lundi 3 septembre 2023", nameSiteActivity: "cameroun", priority:"higth",status:"progress"}
]

let data2 = [
    {activId:5, ActivName:"apprendre a aimer", datetime: "lundi 3 septembre 2022", nameSiteActivity: "cameroun", priority:"higth", status:"done"}
]
localStorage.setItem("object", JSON.stringify(data));
localStorage.setItem("object1", JSON.stringify(data1));
localStorage.setItem("object2", JSON.stringify(data2));


function redAll(){
    var tabledata = document.querySelector('.parent');
    var tabledata1 = document.querySelector('.parent1')
    var tabledata2 = document.querySelector('.parent2')

    var object = localStorage.getItem('object')
    var objectdata = JSON.parse(object)

    var object1 = localStorage.getItem('object1')
    var objectdata1 = JSON.parse(object1)

    var object2 = localStorage.getItem('object2')
    var objectdata2 = JSON.parse(object2)

    var element = "";
    var element1 = "";
    var element2 = "";

    

    objectdata.map(record => (
        element += `<div class="mt-5 bg-white rounded-xl shadow-2xl hover:border-cyan-400 hover:border-2">
        <div class="flex justify-between p-3">
            <h5 class="block font-bold">${record.ActivName}</h5>
            <span class="block"><img id="image1" src="R.jpg" alt="" srcset=""></span>
        </div>
        <div class="px-3 ml-6 justify-between flex">
            ${record.datetime} <span class ="ml-2" onclick="inProcess(${record.activId})"><i class="bi bi-arrow-right-circle-fill text-green-400"></i></span>
        </div>
        <div class="flex p-2">
            <span class="mr-2"><img id="image1" src="istockphoto-1181034192-170667a.jpg" alt="" srcset=""></span><span>${record.priority}</span>
        </div>
    </div>`
    ))
    
    objectdata1.map(record => (
        element1 += `<div class="mt-5 bg-white rounded-xl shadow-2xl hover:border-cyan-400 hover:border-2">
        <div class="flex justify-between p-3">
            <h5 class="block font-bold">${record.ActivName}</h5>
            <span class="block"><img id="image1" src="R.jpg" alt="" srcset=""></span>
        </div>
        <div class="px-3 ml-6 justify-between flex">
            ${record.datetime} <span class ="ml-2" onclick="Done(${record.activId})"><i class="bi bi-arrow-right-circle-fill text-green-400"></i></span>
        </div>
        <div class="flex p-2">
            <span class="mr-2"><img id="image1" src="istockphoto-1181034192-170667a.jpg" alt="" srcset=""></span><span>${record.priority}</span>
        </div>
    </div>`
    ))

    objectdata2.map(record => (
        element2 += `<div class="mt-5 bg-white rounded-xl shadow-2xl hover:border-cyan-400 hover:border-2">
        <div class="flex justify-between p-3">
            <h5 class="block font-bold">${record.ActivName}</h5>
            <span class="block"><img id="image1" src="R.jpg" alt="" srcset=""></span>
        </div>
        <div class="px-3 ml-6 justify-between flex">
            ${record.datetime} <span class ="ml-2" onclick="ecraserTache(${record.activId})"><i class="bi bi-trash-fill text-red-500"></i></span>
        </div>
        <div class="flex p-2">
            <span class="mr-2"><img id="image1" src="istockphoto-1181034192-170667a.jpg" alt="" srcset=""></span><span>${record.priority}</span>
        </div>
    </div>`
    ))

    tabledata.innerHTML = element;
    tabledata1.innerHTML = element1;
    tabledata2.innerHTML = element2;
}

function create(){

    let activId = document.querySelector("#activId")
    let ActivName = document.querySelector('#ActivName')
    let datetime = document.querySelector('#datetime')
    let nameSiteActivity = document.querySelector('#nameSiteActivity')
    let priority = document.querySelector('#priority')

    const id = activId.value
    const name = ActivName.value
    const date = datetime.value
    const site = nameSiteActivity.value
    const pri = priority.value
     
    console.log(activId, ActivName);
    if ((activId.length = 0) || (ActivName.length = 0 ) || (nameSiteActivity.length = 0)||(priority.length = 0) || (datetime.length = 0)) {
        alert('veuiller entrer tous les champs du formulaire')
    }

    var newObj = {activId:id, ActivName:name, datetime:date, nameSiteActivity:site, priority:pri,}
    data.push(newObj)
    
    
   redAll();
}

function chercher (id){
    for (let i = 0; i < data.length; i++) {
        if (data[i].activId === id) {
            return i
        }
    }
}

function chercher1 (id){
    for (let i = 0; i < data1.length; i++) {
        if (data1[i].activId === id) {
            return i
        }
    }
}

function chercher2 (id){
    for (let i = 0; i < data2.length; i++) {
        if (data2[i].activId === id) {
            return i
        }
    }
}

function eddit(activId){
    var tabledata1 = document.querySelector('.parent1');
    var obj = data.find(rec => rec.activId === activId)
    var element1 =`<div class="mt-5 bg-white rounded-xl shadow-2xl hover:border-cyan-400 hover:border-2">
    <div class="flex justify-between p-3">
        <h5 class="block font-bold">${obj.ActivName}</h5>
        <span class="block"><img id="image1" src="R.jpg" alt="" srcset=""></span>
    </div>
    <div class="px-3 ml-6">
        ${obj.datetime} <span class ="ml-14" onclick="eddit(${obj.activId})"><i class="bi bi-pencil-square"></i></span>
    </div>
    <div class="flex p-2">
        <span class="mr-2"><img id="image1" src="istockphoto-1181034192-170667a.jpg" alt="" srcset=""></span><span>${obj.priority}</span>        
    </div>
    </div>`;
    tabledata1.innerHTML = element1;
    // const index = data.findIndex(data => data.activId === obj.activId)
    // alert(data.findIndex(index))
    // console.log(data.index);


    console.log(chercher(obj.activId));

    data.splice(chercher(obj.activId),1)
    redAll();
}

function inProcess(activId){
    var obj = data.find(rec => rec.activId === activId)
    var newObj = {activId:obj.activId, ActivName:obj.ActivName, datetime:obj.datetime, nameSiteActivity:obj.nameSiteActivity, priority:obj.priority,}
    data1.push(newObj)
    
    data.splice(chercher(obj.activId),1)
    redAll();
}

function Done(activId){
    var obj = data1.find(rec => rec.activId === activId)
    var newObj = {activId:obj.activId, ActivName:obj.ActivName, datetime:obj.datetime, nameSiteActivity:obj.nameSiteActivity, priority:obj.priority,}
    data2.push(newObj)
    data1.splice(chercher1(obj.activId),1)
    redAll();
}

function ecraserTache(activId) {
    var obj = data2.find(rec => rec.activId === activId)
    data2.splice(chercher2(obj.activId),1)
    redAll();
}
