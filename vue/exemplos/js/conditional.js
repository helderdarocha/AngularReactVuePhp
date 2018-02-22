/**
 * Created by helderdarocha on 16/02/18.
 */

let vm = new Vue({
    el: "#app",
    data: {
        a: 'Conditional rendering',
        ok: true,
        maybe: true,
        loginType: 'username'
    },
    methods: {
        toggle() {
            this.loginType = this.loginType == 'username' ? 'email' : 'username';
            this.ok = !this.ok;
        },
        toggleMaybe() {
            this.maybe = !this.maybe;
        },
    }
});