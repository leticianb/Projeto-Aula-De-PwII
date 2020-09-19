$(document).ready(function() {
    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#adicionaaluno').serialize();
        console.log(dados);
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/alunos/modelo/adicionaaluno.php',
            success: function(dados) {
                $('#adicionaaluno').after(`
                            <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                            <strong>${dados.mensagem}</strong> 
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            `)
                $('#nome').val("")
                $('#curso').val("")

            }
        })
    })
})