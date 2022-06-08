const addBtn = document.querySelector('#addBtn')
const removeBtn = document.querySelector('#removeBtn')
const inpt = document.querySelector('input')
const card_grp = document.querySelector('#card-grp')

addBtn.addEventListener('click', () => {
    
    if (inpt.value && inpt.value.trim().length !== 0) {
        let elem = document.createElement('td-card')
        card_grp.append(elem)
    } else {
        document.querySelector('#uyr').innerHTML = `
        <h1 class='alert alert-danger display-6'>There are no tasks to add</h1>`
        setTimeout(() => {
            document.querySelector('#uyr').innerHTML = ''
        }, 1500);
    }
})

removeBtn.addEventListener('click', () => {
    if (card_grp.innerHTML != '') {
        card_grp.innerHTML = ''
    } else {
        document.querySelector('#uyr').innerHTML = `
        <h1 class='alert alert-danger display-6'>No task to delete</h1>`

        setTimeout(() => {
            document.querySelector('#uyr').innerHTML = ''
        }, 1500);
    }
})