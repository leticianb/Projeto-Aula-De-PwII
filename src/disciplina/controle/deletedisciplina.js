$(document).ready(function() {
    $('.btn-delete').click(function(e) {
        e.preventDefault()

        var dados = `id=${$(this).attr('id')}`
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/disciplina/modelo/deletedisciplina.php',
            success: function(dados) {

                $('#form').append(` <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                    <strong>${dados.mensagem}</strong> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>`)

                $('tbody').empty()
                $('body').append(' <script src = "src/disciplina/controle/listdisciplina.js">< /script>')

            }

        })
    })
})