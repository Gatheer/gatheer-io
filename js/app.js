$(function() {
    $( "#tasks" ).tabs()
    $( ".know-more" ).on('click', function() {
        $($(this).attr('href') + '-link').click()
    })
})
