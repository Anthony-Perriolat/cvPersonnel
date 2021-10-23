let dateStart = new Date(2020, 11, 30, 8, 30);
let dateEnd = Date.now();
$('#start').append(dateStart)
setInterval( () => {
    let dateEnd = Date.now();
    let ms = Math.abs(dateStart - dateEnd)
    console.log(ms)
    $('#sinceNow').live($('#sinceNow').replaceWith(ms))
}, 1000)
