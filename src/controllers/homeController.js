

// exports.paginaInicial = (req, res) => {
//     // req.session.usuario = {
//     //     nome:'Marcelo',
//     //     logado:true
//     // }
//     // console.log(req.session.usuario)
//     // req.flash('info', 'Olá mundo')
//     // req.flash('error', 'Error');
//     // req.flash('success', 'Bla');
//     console.log(req.flash('error'), req.flash('success'), req.flash('info'))
//     res.render('index');
//     return;
// }

exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este e o <span style="color:red">titulo</span> da pagina',
        numeros: [0,1,2,3,4,5,6,7,8,9]
    });
    return;
}


exports.trataPost = (req, res) => {
    res.send(req.body);
}


  