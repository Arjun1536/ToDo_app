const inputbox = document.getElementById("text-box");
const listcontainer= document.getElementById("list-container")

function addtask(){
    if (inputbox.value ===""){
        alert("You must write somethings")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li)
        //create a span tag
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputbox.value =""
    saveData()
}

// Checked and removed element from TODO

listcontainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

// Save data when browser is refresed

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
// Show data
function showData(){
    listcontainer.innerHTML =localStorage.getItem("data")
}
showData()