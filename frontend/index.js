async function handleFormSubmit(e) {
    e.preventDefault();
    const obj = {
        amount: e.target.amount.value,
        description: e.target.description.value,
        category: e.target.category.value,
    }
    await axios.post('http://localhost:3000/expense', { data: JSON.stringify(obj) }).then((res) => {
        displayExpenseOnScreen(res.data)
        console.log(res);
    }).catch((err) => {
        console.log(err)
    })
    const form = document.getElementById("form")
    form.reset()
}

function displayExpenseOnScreen(data){
    const ul = document.querySelector("ul");
    let listItem = document.createElement("li");
    listItem.className = "list-group-item"
    const delButton = document.createElement("button");
    delButton.textContent = "Delete Expense";
    delButton.className = "delete";
    listItem.appendChild(delButton)
    const editButton = document.createElement("button");
    editButton.textContent = "Edit Expense";
    editButton.className = "edit";
    listItem.textContent = `${data.amount}-${data.description}-${data.category}-`;
    listItem.id = data.id;
    listItem.appendChild(delButton)
    listItem.appendChild(editButton)
    ul.appendChild(listItem)
}

const ul = document.querySelector("ul");
if (ul != null) {
    ul.addEventListener("click",async function (e) {
        e.preventDefault()
        if (e.target.classList.contains("delete")) {
            ul.removeChild(e.target.parentElement);
            const id = e.target.parentElement.id
            await axios.delete(`http://localhost:3000/expense/${id}`).then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
        } else if (e.target.classList.contains("edit")) {
            const text = e.target.parentElement.textContent.split("-")
            ul.removeChild(e.target.parentElement);
            const id = e.target.parentElement.id
            await axios.delete(`http://localhost:3000/expense/${id}`).then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
            const amount = document.getElementById("amount");
            const description = document.getElementById("description");
            const category = document.getElementById("category");
            amount.value = text[0];
            description.value = text[1];
            category.value = text[2];
        }
    })
}

window.addEventListener("DOMContentLoaded", function (e) {
    e.preventDefault();
    axios.get(
        "http://localhost:3000/expense"
      ).then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          displayExpenseOnScreen(response.data[i])
        }
      })
      .catch((error) => console.log(error));
  })