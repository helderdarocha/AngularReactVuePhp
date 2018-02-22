var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: "#app2",
    data: {
        message: 'It is ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: "#app3",
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        directors: [
            {name: 'Tarantino'},
            {name: 'Foster'},
            {name: 'Scott'}
        ]
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Hi guys!'
    },
    methods: {
        reverseIt() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: "#app6",
    data: {
        message: 'Hi Vue!'
    }
})
