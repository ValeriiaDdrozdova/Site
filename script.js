const fname = document.getElementsById('fname')
const lname = document.getElementsById('lname')
const email = document.getElementsById('email')
const form = document.getElementsById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})
