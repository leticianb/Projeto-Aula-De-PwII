$(document).ready(function() {


    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,

        url: 'src/alunos/modelo/validaaluno.php',
        success: function(dados) {
            if (dados.return == false) {
                $(location).attr('href', 'index.html');
            } else {

                alert('usuário logado');

            }


        }
    })

})