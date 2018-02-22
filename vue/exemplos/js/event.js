/**
 * Created by helderdarocha on 16/02/18.
 */
let vm = new Vue({
    el: "#events",
    data: {
        a: 'Events'
    }
})

var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    },
    methods: {
        addTen() {
            this.counter += 10;
        },
        addValue(event) {
            this.counter +=
                parseInt(event.target
                              .attributes
                              .getNamedItem('value')
                              .nodeValue);
        },
        add(number) {
            this.counter += number;
        }
    }
})