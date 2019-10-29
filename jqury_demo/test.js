$(document).ready(() => {
<<<<<<< HEAD
    $('dl').mouseover(() => {
        $(this).css({
            "border": '5px solid #333',
            'cursor': 'pointer'
        })
    });
    console.log('1')
    $('dl').mouseout(() => {
        $(this).css({
            'border': '5px solid #fff'
        })
=======
    $('#del').click(() => {
        $('.tipsbox').show('slow')
    })
    $('input[name=cancel]').click(() => {
        $('.tipbox').hide('fast')
>>>>>>> 8209a7cb4b220c22b5028f5b166c7c77596d47d1
    })
})