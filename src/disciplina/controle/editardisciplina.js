$(document).ready(function() {

    $('.btn-edit').click(function(e) {
        e.preventDefault()
        var dados = `id=${$(this).attr('id')}`
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/disciplina/modelo/editardisciplina.php',
            success: function(dados) {

                $('#form').show()
                $('#form').load('src/disciplina/visao/adicionadisciplina.html', function() {
                    $('.btn-save')
                    $('h4').empty()
                    $('h4').append('Visualização de Registro')
                        //$('.btn-save').after(' <button class="btn btn-secondary btn-block btn-close"><i class="mdi mdi-close"></i> Fechar</button>')

                    //  $('#nome').attr('disabled', true)
                    $('#nome').val(dados[0].nome)
                        // $('#nota').attr('disabled', true)
                        // $('#nota').empty()
                        // $('#nota').append(`<option>${dados[0].nota}</option>`)
                        // $('#professor').attr('disabled', true)
                    $('#professor').val(dados[0].professor)


                })

            }
        })


    })

})