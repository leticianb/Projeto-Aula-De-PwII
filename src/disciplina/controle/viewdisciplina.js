$(document).ready(function() {

    $('.btn-view').click(function(e) {
        e.preventDefault()
        $('#form').load('src/disciplina/visao/adicionadisciplina.html', function() {
            $('h4').empty()
            $('h4').append('Visualização de Registro')
            $('.btn-save').after(' <button class="btn btn-secondary btn-block btn-save"><i class="mdi mdi-save-content"></i> Salvar Alterações</button>')
        })

    })

})