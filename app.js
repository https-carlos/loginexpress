const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.get('/', (req, res) => res.render('index'));

const session = require('express-session');

let usuarios = [{name: 'leonardo',user: 'leonardo@gmail.com', senha: 'silva'}, {name: 'carlos',user: 'carlos@gmail.com', senha: '123'}];

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  }));

app.post('/logado', (req, res) =>  {
    const username = req.body.username;
    const password = req.body.password;
    req.session.username = username;
    req.session.password = password;

    function verificarUsuario(user, senha) {
        for(let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].user === user && usuarios[i].senha === senha) {
                return res.render('logado', { name: usuarios[i].name, usuarios: usuarios});
            }
        }
        res.render('index', { error: 'Falha no login.' });
    }
    verificarUsuario(username, password)
});

app.get('/logado', (req, res) => {
    // Verifica se a sessão já está iniciada
    for(let i = 0; i < usuarios.length; i++) {
        if (req.session.username) {
            res.render('logado', { name: usuarios[i].name, usuarios: usuarios});
            return;
        }
    }
    res.render('index', { error: 'Falha no login.' });
});


app.post('/register', (req, res) =>  {
    const name = req.body.nome;
    const email = req.body.email;
    const password = req.body.password;
    const emailExists = usuarios.some(usuario => usuario.user === email);
    if (emailExists) {
        return res.render('index', { erroemail: 'Email já registrado. Escolha outro email.' });
    }
    else {
        usuarios.push({name: name, user: email, senha: password});
    }
    res.redirect('/')
});

app.delete('/delete', (req, res) =>  {
    let emailSemEspaco = req.body.email.trim();
    let index = usuarios.findIndex(usuario => usuario.user === emailSemEspaco);
    if (index !== -1) {
        usuarios.splice(index, 1);
        console.log(req.body.email);
      }
      console.log(usuarios);
     
    res.status(200).send('Usuário deletado');
});

app.get('/logout', (req, res) => {
    // Destroi a sessão ao fazer logout
    req.session.destroy(() => {
      res.redirect('/');
    });
  });
app.listen(3000, () => console.log('Server ready'));
