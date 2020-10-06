$(document).ready(function() {
    $('.brn-login').click(function(e) {
        e.preventDefault()
        var dados = $('#form-login').serialize()
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/alunos/modelo/loginaluno.php',
            success: function(dados) {
                $('#form-login').after(`
                            <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                            <strong>${dados.mensagem}</strong> 
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            `)
                $('#id').val("")
                $('#senha').val("")

            }
        })
    })
})