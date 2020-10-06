$(document).ready(function() {
    $('.btn-login').click(function(e) {
        e.preventDefault()
        var dados = $('#form-login').serialize()
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/alunos/modelo/loginaluno.php',
            success: function(dados) {
                if (dados.result == true) {
                    alert('login correto');
                } else {

                    $('#form-login').after(`
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>ID ou senha errado</strong> 
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            `)
                }
                $('#id').val("")
                $('#senha').val("")

            }
        })
    })
})