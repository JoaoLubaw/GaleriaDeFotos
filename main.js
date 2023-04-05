$('header button').click(function(){
    $('form').slideDown();
})

$('#Botao-cancelar').click(function(){
    $('form').slideUp();
})

$('form').on('submit', function(e) {
    e.preventDefault();
    const newurl = $('#newurl').val();
    const novo = $('<li style="display:none"></li>');
    $(`<img src="${newurl}" />`).appendTo(novo);
    
    $(`
    <div class="images-link">
    <a href="${newurl}" target="_blank">
        Ver imagem em tamanho real
    </a>
</div class="images-link">
    `).appendTo(novo);
    $(novo).appendTo('ul');
    $(novo).fadeIn();
    $('#newurl').val('');
})
 