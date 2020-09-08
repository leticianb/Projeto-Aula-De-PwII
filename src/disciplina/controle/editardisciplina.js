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
            url: 'src/disciplina/modelo/viewdisciplina.php',
            success: function(dados) {
                $('#form').show(2000)
                $('.row').hide(2000)

                $('#form').load('src/disciplina/visao/adicionadisciplina.html', function() {
                    $('h4').empty()
                    $('h4').append('Edição de Registro')
                    $('.btn-save').after(' <button class="btn btn-secondary btn-block btn-close"><i class="mdi mdi-close"></i> Fechar</button>')
                    $('.btn-save').addClass('btn-update').removeClass('btn-save')


                    $('#nome').val(dados[0].nome)



                    $('#nota').append(`<option selected>${dados[0].nota}</option>`)
                    $('#nota').after(` <input type="hidden" name="id" id="id" value ="${dados[0].id}">`)
                    $('#professor').val(dados[0].professor)

                    btnclose()
                })
                $('body').append('<script src="src/disciplina/controle/updatedisciplina.js"></script>')

            }
        })


    })

})