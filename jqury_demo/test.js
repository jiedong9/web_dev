$(document).ready(() => {
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
    })
})