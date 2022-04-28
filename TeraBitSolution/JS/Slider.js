//Creación de variables para el Envio de documentos
var $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)
async function handleSubmit(event){
  event.preventDefault()
  var form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers:{
      'Accept': 'application/json'
    }
  })
  if(response.ok) {
    this.reset()
    alert('Gracias por contactar')
  }
}

//Funciona para mostrar el nombre de los iconos
var Bottom = document.getElementById("CheckBtn");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById('d');
var e = document.getElementById('e');

a.addEventListener('click', function() {
  alert('aqui entra')
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
});

