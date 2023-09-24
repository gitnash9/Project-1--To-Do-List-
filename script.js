
const toDoForm = document.querySelector("#to-do-form");
const userInput = document.querySelector("#add-to-do");
const toDoList = document.querySelector("#to-do-list");

toDoForm.addEventListener("submit", addToDoItem);

function addToDoItem() {
    const toDoForm = userInput.value;

    // create a new list element
    // append the list element to the <ul>
}

// Bonus - add the list to local storage and be able to retrieve it from local storage 