$(document).ready(function() {
    $('#logout').click(function(e) {
        e.preventDefault()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,

            url: 'src/alunos/modelo/logoutaluno.php',
            success: function(dados) {
                if (dados.return == true) {
                    $(location).attr('href', 'index.html');
                } else {

                    alert('ocorreu algum erro');

                }


            }
        })
    })
})