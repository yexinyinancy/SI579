function addTask(description, dueTime) {
    console.log("test")
    const orderListElement = document.getElementById("task_list");
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    listItem.textContent = description;
    
    
    button.setAttribute("class", "btn btn-sm btn-outline-danger done");
    button.setAttribute("type", "button");
    button.textContent = "Done";
    button.addEventListener("click", ()=>{
        listItem.remove();
    });
    if(dueTime) {
        const span = document.createElement("span");
        span.setAttribute("class", "due");
        const date = new Date(dueTime);
        console.log(date)
        span.textContent = "due " + date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        listItem.appendChild(span);
    }
    listItem.appendChild(button);
    orderListElement.appendChild(listItem);
    descriptionInput.value = "";
    document.getElementById("duetime_input").value='';
    document.getElementById("duedate_input").value='';
}

function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}

const addTaskButton = document.getElementById("add_task");
const descriptionInput = document.getElementById("task_description_input");
const dueDateInput = document.getElementById("duedate_input");
const dueTimeInput = document.getElementById("duetime_input");
document.getElementById("duetime_input").value='';
document.getElementById("duedate_input").value='';
addTaskButton.addEventListener("click",function (){
    addTask(descriptionInput.value, dateAndTimeToTimestamp(dueDateInput, dueTimeInput));
});

descriptionInput.addEventListener("keydown", (event)=>{
    if (event.key === "Enter") {
        addTask(descriptionInput.value, dateAndTimeToTimestamp(dueDateInput, dueTimeInput));
    }
});
