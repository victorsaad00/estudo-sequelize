const { Usuario, Post, Comentario, sequelize} = require('./models');

Comentario.findAll()
.then((resultado)=> {
    console.table(resultado.map(comentario => comentario.toJSON()));
});