$(document).ready(() => {
    $('#del').click(() => {
        $('.tipsbox').show('slow')
    })
    $('input[name=cancel]').click(() => {
        $('.tipbox').hide('fast')
    })
})