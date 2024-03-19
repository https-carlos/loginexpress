var nomeCompleto = document.getElementById('name').textContent;
var partesDoNome = nomeCompleto.split(' ');
var primeiroNome = partesDoNome[0];
document.getElementById('name').textContent = primeiroNome;
//
function ExcluirUser(id){

var email = document.getElementById(`p${id}`).textContent

console.log("Botão clicado com ID:", id);

  var ExcluirDaLista = document.getElementById(`u${id}`);

  if (ExcluirDaLista) {
      ExcluirDaLista.remove();
  } else {
      console.log("Elemento não encontrado.");
  }

  fetch('/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email: email}),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => {
    console.error('Erro:', error);
  });
};

