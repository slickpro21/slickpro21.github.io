new TypeIt('#example4', {
    speed: 50,
    autoStart: false
    })
    .type('Wll')
    .pause(500)
    .delete(2)
    .type('ell, ')
    .pause(1000)
    .type('I guess I\'m typing..')
    .break()
    .pause(750)
    .type(' but I don\'t really know what to say')
    .options({speed: 700})
    .type('...')
    .pause(750)
    .options({speed: 50})
    .delete()
    .type('IS THAT SO <strong>WRONG??</strong>');