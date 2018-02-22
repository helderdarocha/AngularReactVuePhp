/**
 * Created by helderdarocha on 16/02/18.
 */

Vue.component('count-button', {
    template: '<button @click="counter+=1">{{counter}}</button>',
    data() {
        return {
            counter: 0
        }
    }
})

const SimpleRowComponent = {
    template: '<tr><td><img :src="image"></td><td>text</td><td>rating</td></tr>',
    data() {
        return {
            image: 'http://place-hold.it/75x100'
        }
    },
};

Vue.component('simple-row', SimpleRowComponent);


const MovieEntry = {
    template: '<tr><td><img :src="poster"></td><td>text</td><td>rating</td></tr>',
    props: {
        poster: {
            type: String,
            default: 'http://place-hold.it/75x100'
        }
    }
};

const MoviesComponent = {
    template: '<table class="movie-table">' +
              '   <movie-entry :poster="image"></movie-entry>' +
              '</table>',
    components: {
        'movie-entry': MovieEntry
    },
    data() {
        return {
            image: 'http://place-hold.it/75x100'
        }
    },
};

const MoviesListComponent = {
    template: '<ul class="movie-list">' +
    '   <li>{{image}}</li>' +
    '</ul>',
    components: {
        'movie-entry': MovieEntry
    },
    data() {
        return {
            image: 'http://place-hold.it/75x100'
        }
    },
};

const components2 = new Vue({
    el: "#components2",
    data: {
        a: 'Components',
        currentView: 'movie-list'
    },
    components: {
        'movie-table': MoviesComponent,
        'movie-list': MoviesListComponent
    },
    methods: {
        toggle() { console.log(this.currentView)
            this.currentView = this.currentView == 'movie-list' ? 'movie-table' : 'movie-list'
        }
    }
})