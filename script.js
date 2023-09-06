// obrigatorio add no codigo javascript - jquery

$(document).ready(function() {
    //  adicionar o codigo javascript - jquery dentro do documento

    $('#btnClique').click(function(){
        //acao do clique no elemento definido
        alert('ola pessoal');

        //variavel captura o nome do usuario
        var nome = prompt('Digite seu nome');
        $('#mensagem').html('<div class="alert alert-warning" role="alert">'+nome+'</div>');
    });

});