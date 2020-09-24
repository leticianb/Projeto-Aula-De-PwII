$(document).ready(function() {
    $('.btn-update').click(function(e) {
        e.preventDefault()

        let dados = $('#adicionaaluno').serialize();
        console.log(dados);
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/alunos/modelo/updatealuno.php',
            success: function(dados) {
                if (dados.return == true) {
                    $('#form').empty()
                    $('#form').hide(2000)
                    $('tbody').empty()
                    $('body').append(' <script src = "src/alunos/controle/listaraluno.js">< /script>')
                    $('.row').show(2000)
                } else {
                    alert('deu ruim')
                }

            }
        })
    })
})