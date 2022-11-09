//Create Array to store the leads
let myLeads = ["pepe", "tato"];
const inputEl = document.getElementById("input-el"); //This cannot be reassign
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

//Activate the save button after click
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    renderLeads();
    let inputEmpty = "";
    inputEl.value = inputEmpty;
});

//Log out the items of the Array
function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>";
    //const li = document.createElement("li");
    //li.textContent = myLeads[i];
    //ulEl.append(li);
};

    ulEl.innerHTML = listItems;
};











