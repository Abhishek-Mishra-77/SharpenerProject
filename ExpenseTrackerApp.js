const btn = document.getElementById('btn');
const userList = document.getElementById('items');
const Expense = document.getElementById('Expense');
const Description = document.getElementById('Description');
const select = document.getElementById('select');
const msg = document.getElementById('msg');


btn.addEventListener('click', ExpenseTracker);

function ExpenseTracker(event) {
    event.preventDefault();


    //Delete Expenses

    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete Expenses';

    // Edit button

    const editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = 'Edit Expenses'

    //Add All details
    const ExpenseAmount = Expense.value;
    const DescriptionName = Description.value;
    const selectthing = select.value;

    const details = {
        ExpenseAmount,
        DescriptionName,
        selectthing
    };

    localStorage.setItem(details.DescriptionName, JSON.stringify(details));


    if (ExpenseAmount.value === 0 || DescriptionName.value === '' || selectthing.value === '') {
        msg.style.background = 'red';
        msg.innerHTML = 'Please fill the form !';
        setTimeout(() => msg.remove(), 5000)
    }
    else {
        const li = document.createElement('li');

        li.appendChild(document.createTextNode(`${Expense.value} - ${Description.value} - ${select.value} - `));
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        userList.appendChild(li);

        Expense.value = null;
        Description.value = ' ';
        select.value = ' ';

        // Delete section

        deleteBtn.onclick = () => {
            localStorage.removeItem(details.DescriptionName);
            userList.removeChild(li);
        }

        // Edit section

        editBtn.onclick = () => {
            Expense.value = details.ExpenseAmount;
            Description.value = details.DescriptionName;
            select.value = details.selectthing;
            localStorage.removeItem(details.DescriptionName);
            userList.removeChild(li);
        }

    }

}


// When the page refres all data will showing in the web page

window.addEventListener('load', (event) => {

      const data = Object.keys(localStorage);

      data.forEach( (key) => {
        const li = document.createElement('li');
        const details = JSON.parse(localStorage.getItem(key));

        li.appendChild(document.createTextNode(`${details.ExpenseAmount} - ${details.DescriptionName} - ${details.selectthing} `));
        const deleteBtn = document.createElement('input');
        deleteBtn.type = 'button';
        deleteBtn.value = 'Delete Expense';
        li.appendChild(deleteBtn);

        const editBtn = document.createElement('input');
        editBtn.type = 'button';
        editBtn.value = 'Edit Expense';
        li.appendChild(editBtn);

        deleteBtn.onclick = () => {
            localStorage.removeItem(details.DescriptionName);
            userList.removeChild(li);
        }

        editBtn.onclick = () => {
            Expense.value = details.ExpenseAmount;
            Description.value = details.DescriptionName;
            select.value = details.selectthing;
            localStorage.removeItem(details.DescriptionName);
            userList.removeChild(li);
        }

        userList.appendChild(li);

      });

});