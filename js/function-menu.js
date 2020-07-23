$(document).ready(function() {
    //   $('#conteudo').load('src/conexao/disciplina/modelo/visao/listdisciplina.html');
    //})
    $('#adiciona').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/disciplinas/visao/adiciona-disciplinas.html')
    })

})