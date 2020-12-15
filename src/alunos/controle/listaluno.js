    $(document).ready(function() {
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            url: 'src/alunos/modelo/listaluno.php',
            success: function(dados) {
                for (var i = 0; i < dados.length; i++) {
                    let resultado = `  <tr>
                    <td ><img  width="50" height="50" src="src/aluno/modelo/img/${dados[i].foto}"/></td>
                    <td >${dados[i].foto}</td>
                    <td >${dados[i].nome}</td>
                    <td >${dados[i].curso}</td>
                    <td >${dados[i].tipo == 1? 'administrador' : 'aluno'}</td>
             
                    <td >
                        <button id="${dados[i].id}" class="btn btn-danger btn-sm btn-view"><i class="mdi mdi-eye"></i></button>
                        <button id="${dados[i].id}" class="btn btn-danger btn-sm btn-edit"><i class="mdi mdi-pencil"></i></button>
                        <button id="${dados[i].id}" class="btn btn-danger btn-sm btn-delete"><i class="mdi mdi-trash-can"></i></button>
                    </td>
                </tr>`
                    $('tbody').append(resultado)
                }
                $('body').append('<script src="src/alunos/controle/viewaluno.js"></script>')
                $('body').append('<script src="src/alunos/controle/editaluno.js"></script>')
                $('body').append('<script src="src/alunos/controle/deletealuno.js"></script>')

            }

        })
    })