/**
 * Created by helderdarocha on 16/02/18.
 */

let vm = new Vue({
    el: '#app9',
    data: {
        a: 'Never Changes',
        raw1: 'x',
        raw2: '<i style="color: red">x</i>', // xss risk!
        image: 'https://vuejs.org/images/logo.png'
    },
    methods: {
        doSomething() {
           alert(this.a)
        }
    }
})
