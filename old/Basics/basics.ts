form = document.getElementById('frm')
val1 = frm.a;
val2 = frm.b;
let a = document.getElementById('a')
let b = document.getElementById('b')
let button = document.getElementById('submit')

button.addEventListener('click', (event) => {
   event.preventDefault()
   let result = parseInt(a.value) + parseInt(b.value)
   alert(result)
   document.write(`${val1.var}`)
})

