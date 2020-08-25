$(document).ready(function() {
    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#adicionadisciplina').serialize();
        console.log(dados);
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/conexao/disciplina/modelo/adicionadisciplina.php',
            success: function(dados) {
                $('#adicionadisciplina').after(`
                            <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                            <strong>${dados.mensagem}</strong> 
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            `)
                $('#nome').val("")
                $('#professor').val("")
                $('#nota').val("")
            }
        })
    })
})