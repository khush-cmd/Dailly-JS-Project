// first we are traversing the input element
const typeInput = document.getElementById('type');
const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const dateInput = document.getElementById('date');
const addBtn = document.getElementById('add-btn');

// now traversing the output element 
const balanceE1 = document.getElementById('balance');
const spentE1 = document.getElementById('spent');
const savedE1 = document.getElementById('saved');
const historyTable = document.querySelector('.history-table table');

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function updateUI(){
    historyTable.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Amount</th>
        <th>Date</th>
    </tr>
    `;

    let totalIncome = 0;
    let totalexpense = 0;

    transactions.forEach((t) =>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${t.name}</td>
        <td class="badge ${t.type.toLowerCase()}">${t.type}</td>
        <td>${t.amount}</td>
        <td>${t.date}</td>
        `;
        historyTable.appendChild(row);

        if(t.type === "Income"){
            totalIncome += Number(t.amount);
        }
        else{
            totalexpense += Number(t.amount);
        }
    });
    balanceE1.innerText = `₹ ${(totalIncome - totalexpense)}`;
    spentE1.innerText = `₹ ${totalexpense}`;
    savedE1.innerHTML= `₹ ${totalIncome}`;
}
function addTransaction(){
    const name = nameInput.value;
    const type = typeInput.value;
    const amount = amountInput.value;
    const date = dateInput.value;
    const category = categoryInput.value;

    // edge case bari hi nhi 
    if(!name || !amount || !date){
        alert('please fill in all fields');
        return;
    }

    const transaction = {
        name,
        type,
        amount,
        category,
        date,
    };
    transactions.push(transaction);
    localStorage.setItem("transactions",JSON.stringify(transactions));
    updateUI();

    nameInput.value = "";
    amountInput.value = "";
    dateInput.value = "";

    
}
addBtn.addEventListener("click",addTransaction);
updateUI();





