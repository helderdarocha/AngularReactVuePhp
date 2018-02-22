const Actor = {
    props: ['actor'],
    template: '<li>{{actor.imdb}}: {{actor.name}}</li>'
};

const Movie = {
    template:
        `<div><img :src="poster" width="150"/><br/>
        {{title}} ({{year}} {{duration}} min. by {{director.name}}
        <br/>
        <button @click="toggle()">{{buttonLabel}}</button>
        <ul v-show="showActors">
            <actor v-for="actor in actors" :actor="actor"/>
        </ul>
        </div>`,
    props: {
        title: {
            type: String,
            default: 'No title'
        },
        year: {
            type: Number,
            default: 1900
        },
        duration: {
            type: Number,
            default: 0
        },
        poster: {
            type: String,
            default: 'http://place-hold.it/75x100'
        },
        director: {
            type: Object,
            default: {name: 'Nobody'}
        },
        actors: {
            type: Array,
            default() { return []; }
        }
    },
    methods: {
        toggle() {
            this.buttonLabel = (this.buttonLabel ==  'Show actors')
                                ? 'Hide actors' : 'Show actors';
            this.showActors = !this.showActors;
        }
    },
    data() {
        return {
            showActors: false,
            buttonLabel: 'Show actors'
        }
    },
    components: {
        'actor': Actor
    }

};

new Vue({
    el: "#moviedb",
    data: {
        selectedMovie: null,
        movies: []
    },
    components: {
        'movie': Movie
    },
    mounted() {
        axios.get('http://localhost:8080/services/webapi.php/movie')
            .then(res => {
                this.movies = res.data;
            }).catch(error => {
            console.error('Error ' + error);
        });
    }
})