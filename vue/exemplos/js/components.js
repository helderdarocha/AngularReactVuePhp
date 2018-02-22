Vue.component('actor', {
    props: ['handle'],
    template: '<li>{{handle.imdb}}: {{handle.name}}</li>'
})

var app7 = new Vue({
    el: "#app7",
    data: {
        message: 'Actors',
        actors: [
            { imdb: 'nn0005561', name: 'Carrie Fisher'},
            { imdb: 'nn1321329', name: 'John Travolta'},
            { imdb: 'nn0000335', name: 'Jack Nicholson'}
        ]
    }
})

