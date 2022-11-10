//Create Array to store the leads
let myLeads = `[]`;
myLeads = JSON.parse(myLeads);

const inputEl = document.getElementById("input-el"); //This cannot be reassign
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

//Activate the save button after click
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    renderLeads();
    let inputEmpty = "";
    inputEl.value = inputEmpty;
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
});

//Log out the items of the Array
function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a target= '_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
        listItems += ` <li>
                            <a target= '_blank' href='${myLeads[i]}'> 
                            ${myLeads[i]} 
                            </a>
                        </li>`;

    //const li = document.createElement("li");
    //li.textContent = myLeads[i];
    //ulEl.append(li);
};

ulEl.innerHTML = listItems;
};

//Delete All button
let deleteBtn = document.getElementById("delete-btn");

deleteBtn.addEventListener("click", function() {
    localStorage.clear();
    myLeads = [];
    renderLeads();
})










