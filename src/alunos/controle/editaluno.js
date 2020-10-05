function btnclose() {
    $('.btn-close').click(function(e) {
        e.preventDefault()
        $('#form').empty()
        $('#form').hide(2000)
        $('.row').show(2000)
    })
}

$(document).ready(function() {

    $('.btn-edit').click(function(e) {
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
                    $('h4').append('Edição de Registro')
                    $('.btn-save').after(' <button class="btn btn-secondary btn-block btn-close"><i class="mdi mdi-close"></i> Fechar</button>')
                    $('.btn-save').addClass('btn-update').removeClass('btn-save')
                    $('#nome').val(dados[0].nome)
                    $('#tipo').append(`<option value="${dados[0].tipo}" selected>${dados[0].tipo == 1? 'administrador' : 'aluno'}</option>`)
                    $('#curso').val(dados[0].curso)
                    $('#senha').val(dados[0].senha)
                    $('#curso').after(` <input type="hidden" name="id" value="${dados[0].id}">`)
                    btnclose()
                })
                $('body').append('<script src="src/alunos/controle/updatealuno.js"></script>')

            }
        })


    })

})