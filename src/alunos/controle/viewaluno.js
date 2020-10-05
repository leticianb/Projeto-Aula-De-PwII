function btnclose() {
    $('.btn-close').click(function(e) {
        e.preventDefault()
        $('#form').empty()
        $('#form').hide(2000)
        $('.row').show(2000)
    })
}

$(document).ready(function() {

    $('.btn-view').click(function(e) {
        e.preventDefault()
        var dados = `id=${$(this).attr('id')}`
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/alunos/modelo/viewaluno.php',
            success: function(dados) {
                $('#form').show(2000)
                $('.row').hide(2000)

                $('#form').load('src/alunos/visao/adicionaaluno.html', function() {
                    $('h4').empty()
                    $('h4').append('Visualização de Registro')
                    $('.btn-save').after(' <button class="btn btn-secondary btn-block btn-close"><i class="mdi mdi-close"></i> Fechar</button>')
                    $('.btn-save').hide()
                    $('#nome').attr('disabled', true)
                    $('#nome').val(dados[0].nome)
                    $('#tipo').attr('disabled', true)
                    $('#tipo').empty()
                    $('#tipo').append(`<option>${dados[0].tipo == 1? 'administrador' : 'aluno'}</option>`)
                    $('#curso').attr('disabled', true)
                    $('#curso').val(dados[0].curso)
                    $('#senha').attr('disabled', true)
                    $('#senha').val(dados[0].senha)
                    btnclose()
                })

            }
        })


    })

})