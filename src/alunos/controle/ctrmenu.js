$(document).ready(function() {

    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,
        data: dados,
        url: 'src/alunos/modelo/tipoaluno.php',
        success: function(dados) {
            if (dados.tipo == 2) {
                $('.aluno').hide()

            }
        }
    })
})