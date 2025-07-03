// Step 1: Access HTML Element 
const taskInput = document.getElementById('todo-text');
const timeInput = document.getElementById('input-time');
const addButton = document.querySelector('.add-btn');
const taskList = document.getElementById('task');

addButton.addEventListener('click',()=>{
   const task = taskInput.value.trim();
   const time = timeInput.value;

   if(time === "" || task === ""){
    alert("Please enter both task and time!");
    return;
   }

   const li = document.createElement("li");
   const taskSpan = document.createElement("span");
   taskSpan.textContent = `${task} - ${time}`;
   
   const deleteBtn = document.createElement('button');
   deleteBtn.textContent = "❌";
   deleteBtn.style.marginLeft = "1px";
   deleteBtn.style.background = "none";
   deleteBtn.style.border = "none";
   deleteBtn.style.cursor = "pointer";
   deleteBtn.style.fontSize = "16px";
   
   deleteBtn.addEventListener('click',()=>{
       li.remove();
    });
    
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);


   taskInput.value = "";
   timeInput.value = "";

});