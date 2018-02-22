/**
 * Created by helderdarocha on 16/02/18.
 */

Vue.component('test-component', {
    template: '<span class="hot">Component</span>'
});

let vm = new Vue({
    el: "#style-bindings",
    data: {
        a: 'Stylish Page',
        defaultColor: 'blue',
        invert: true,
        isDark: new Date().getHours() > 18 && 
                new Date().getHours() < 6 ? true : false,
        isMobile: screen.width <= 480 ? true : false,
        styleObject: {
            fontSize: '45pt',
            color: this.defaultColor
        }
    },
    computed: {
        plainStyle() {
            return {
                night: this.invert ? !this.isDark : this.isDark,
                big: this.invert ? !this.isMobile : this.isMobile
            };
        },
        warmStyle() {
            let newStyle = Object.assign({}, this.plainStyle);
            newStyle.warm = true;
            return newStyle;
        },
        coldStyle() {
            let newStyle = Object.assign({}, this.plainStyle);
            newStyle.cold = true;
            return newStyle;
        },
        borderStyle() {
            return {
                'add-border': true
            }
        }
    }
});

