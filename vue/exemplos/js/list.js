/**
 * Created by helderdarocha on 16/02/18.
 */

Vue.component('movie', {
    template:
        '<div><img :src="poster" width="150"/><br/>\
        {{title}} ({{year}} {{duration}} min. by {{director.name}}\
        Cast: <template v-for="actor in actors" :key="actor.imdb">\
            {{actor.name}},\
            </template> \
        and others.\
        </div>',
    props: ['title', 'year', 'duration', 'director', 'poster', 'actors']
})

let vm = new Vue({
    el: '#movieApp',
    data: {
        a: 'Lists',
        directors: [],
        actors: [],
        movies: [],
        error: null
    },
    methods: {
        getAll(dataType) {
            axios.get('http://localhost:8080/services/webapi.php/'+dataType)
                .then(res => {
                    this[dataType + 's'] = res.data;
                }).catch(error => {
                    console.error('Error ' + error);
                });
        },
        getDirectors() {
            this.getAll('director');
        },
        getActors() {
            this.getAll('actor');
        },
        getMovies() {
            this.getAll('movie');
        }
    },
    mounted() {
        this.getDirectors();
        this.getActors();
        this.getMovies();
    }
});