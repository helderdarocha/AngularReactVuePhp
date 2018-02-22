/**
 * Created by helderdarocha on 16/02/18.
 */

var obj = {a: 1, b: ''};

var vm = new Vue({
    el: '#app8',
    data: obj
})

// obj.a == vm.a

// vm.$el will return the element (document.getElementById)

// change vm.a (should not use arrow functions)
vm.$watch('a', (newV, oldV) => {
    vm.b = oldV + " Changed to " + newV;
})

// use this inside the object

let vm2 = new Vue({
    data: {
        a: 1,
        b: '',
        c: null
    },
    created() {
        console.log(`a is ${this.a}`);
    }
});

/*
 Don’t use arrow functions on an options property or callback,
 such as created: () => console.log(this.a)
 or vm.$watch('a', newValue => this.myMethod()).
 Since arrow functions are bound to the parent context,
 this will not be the Vue instance as you’d expect,
 often resulting in errors such as Uncaught TypeError:
 Cannot read property of undefined or Uncaught TypeError:
 this.myMethod is not a function.
 */