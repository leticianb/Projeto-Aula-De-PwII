$(document).ready(function() {
    //   $('#conteudo').load('src/conexao/disciplina/modelo/visao/listdisciplina.html');
    //})
    $('#adiciona').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/disciplina/visao/adicionadisciplina.html')
    })
    $('#listar').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/disciplina/visao/listdisciplina.html')
    })

})