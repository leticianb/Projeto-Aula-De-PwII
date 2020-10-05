$(document).ready(function() {
    //   $('#conteudo').load('src/conexao/disciplina/modelo/visao/listdisciplina.html');
    //})
    $('.btn').click(function(e) {
        e.preventDefault()
        let url = $(this).attr('href')
        $('#conteudo').empty()
        $('#conteudo').load(url)
    })


})