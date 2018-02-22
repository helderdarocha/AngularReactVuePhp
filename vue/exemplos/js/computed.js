/**
 * Created by helderdarocha on 16/02/18.
 */
var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    }
})

// more efficient than implementing as methods
// results are cached
// if results are not dependent or if caching is not desired, use methods

// computed is reactive
// watch is imperative

var vm2 = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
});

var vm3 = new Vue({
    el: '#demo2',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
});

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'You need to ask something!',
        image: ''
    },
    watch: {
        question: function(newQ, oldQ) {
            this.answer = 'Waiting for you to stop typing...';
            this.image = 'http://place-hold.it/150x200'
            this.getAnswer();
        }
    },
    methods: {
        getAnswer: _.debounce( function() {
            if(this.question.indexOf('?') === -1) {
                this.answer = 'Whare is the question mark?';
                return;
            }
            this.answer = 'Thinking...';
            var vm = this;
            axios.get('https://yesno.wtf/api')
                .then( response => {
                     vm.answer = _.capitalize(response.data.answer);
                     vm.image  = response.data.image;
                })
                .catch(error => {
                    vm.answer = 'Error ' + error
                })
        }, 500)
    }
})