const about = document.forms.namedItem('register')
const reqs_inp = document.querySelectorAll('.yes')
const btn = document.querySelector('button')
const allInputs = document.querySelectorAll('input')



register.onsubmit = (event) => {
    event.preventDefault()
     let error =  false

     reqs_inp.forEach(input => {
        if(input.value.length === 0) {
            input.style.border = "2px solid red"
            error = true
        }
     })

     if(error === false) {
        submit(event.target)
        return
     }

     alert('Заполни таблицу!')
}

function submit(target) {
    const user = {} 

    const fm = new FormData(target)

    fm.forEach((val, key) => user[key] = val)

    console.log(user);
}

const patterns = {
    name: /^[a-z ,.'-]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    age: /^[0-9]+$/,
    abiut: /^[a-z ,.'-]+$/i,
    js: /^[a-z ,.'-]+$/i,
    html:/^[a-z ,.'-]+$/i,
    css: /^[a-z ,.'-]+$/i,
}

allInputs.forEach(inp => {
    inp.onkeyup = (e) => {
        const val = e.target.value

        patterns[inp.name].lastIndex = 0

        if(patterns[inp.name].test(val)){
            inp.style.borderColor = "blue"
        }else {
            inp.style.borderColor = "red"
        }
    }
})

