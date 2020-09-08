$(document).ready(function() {
    $('.btn-update').click(function(e) {
        e.preventDefault()

        let dados = $('#adicionadisciplina').serialize();
        console.log(dados);
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/disciplina/modelo/updatedisciplina.php',
            success: function(dados) {
                if (dados.return == true) {
                    $('#form').empty()
                    $('#form').hide(2000)
                    $('tbody').empty()
                    $('body').append(' <script src = "src/disciplina/controle/listdisciplina.js">< /script>')
                    $('.row').show(2000)
                } else {
                    alert('deu ruim')
                }

            }
        })
    })
})