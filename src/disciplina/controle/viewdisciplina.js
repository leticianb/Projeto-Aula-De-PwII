$(document).ready(function() {

    $('.btn-view').click(function(e) {
        e.preventDefault()
        $('#form').load('src/disciplina/visao/adicionadisciplina.html', function() {
            $('h4').empty()
            $('h4').append('Visualização de Registro')
            $('.btn-save').after(' <button class="btn btn-secondary btn-block btn-close"><i class="mdi mdi-close"></i> Fechar</button>')
            $('.btn-save').hide()
            $('#nome').attr('disabled', true)
            $('#nota').attr('disabled', true)
            $('#professor').attr('disabled', true)
        })

    })

})