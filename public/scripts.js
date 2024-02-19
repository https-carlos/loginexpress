function MudarParaRegistro() {
  document.getElementsByClassName("secondcontentL")[0].style.opacity = "1";
  document.getElementById("myGrid").style.gridTemplateColumns = "40% 60%";
  document.getElementById("form1").style.opacity = "0";
  document.getElementById("h1log").style.opacity = "0";
  document.getElementsByClassName("secondcontentL")[0].style.pointerEvents = "all";
  document.getElementsByClassName("form")[0].style.pointerEvents = "none";
  document.getElementsByClassName("secondcontentR")[0].style.opacity = "0";
  document.getElementById("formr").style.opacity = "1";
  document.getElementsByClassName("form2")[0].style.pointerEvents = "all";
  document.getElementsByClassName("secondcontentR")[0].style.pointerEvents = "none";
  document.getElementById("h1reg").style.opacity = "1";
  document.getElementsByClassName("form")[0].style.backgroundColor = "white"
  document.getElementsByClassName("form2")[0].style.backgroundColor = "#0B5ED7"
  }

function MudarParaLogin(){
  document.getElementsByClassName("secondcontentL")[0].style.opacity = "0";
  document.getElementById("myGrid").style.gridTemplateColumns = "60% 40%";
  document.getElementById("form1").style.opacity = "1";
  document.getElementById("h1log").style.opacity = "1";
  document.getElementsByClassName("secondcontentL")[0].style.pointerEvents = "none";
  document.getElementsByClassName("form")[0].style.pointerEvents = "all";
  document.getElementsByClassName("secondcontentR")[0].style.opacity = "1";
  document.getElementById("formr").style.opacity = "0";
  document.getElementsByClassName("form2")[0].style.pointerEvents = "none";
  document.getElementsByClassName("secondcontentR")[0].style.pointerEvents = "all";
  document.getElementById("h1reg").style.opacity = "0";
  document.getElementsByClassName("form")[0].style.backgroundColor = "#0B5ED7"
  document.getElementsByClassName("form2")[0].style.backgroundColor = "white"
}

//validar campos:

function validateLogin() {
  var email = document.getElementById('floatingInputLogin').value;
  var password = document.getElementById('floatingPasswordLogin').value;

  if (!isValidEmail(email)) {
      alert('Por favor, insira um email válido.');
      return false;
  }

  if (password.trim() === '') {
      alert('Por favor, insira sua senha.');
      return false;
  }

  return true;
}

function validateRegister() {
  var nome = document.getElementById('floatingInputRegister').value;
  var email = document.getElementById('floatingInput2Register').value;
  var password = document.getElementById('floatingPasswordRegister').value;
  var confirmPassword = document.getElementById('floatingPassword2Register').value;

  if (nome.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return false;
  }

  if (!isValidEmail(email)) {
      alert('Por favor, insira um email válido.');
      return false;
  }

  if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return false;
  }

  return true;
}

function isValidEmail(email) {
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      return false;
  }
  return true;
}