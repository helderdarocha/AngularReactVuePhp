/**
 * Created by helderdarocha on 16/02/18.
 */

Vue.component('movie', {
    template:
        '<div><img :src="poster" width="150"/><br/>\
        {{title}} ({{year}} {{duration}} min. by {{director.name}}\
        </div>',
    props: ['title', 'year', 'duration', 'director', 'poster']
})

let vm = new Vue({
    el: '#form',
    data: {
        a: 'Forms',
        message: '',
        lazymsg: '',
        message2: '',
        wantLunch: false,
        preferences: [],
        sex: 'unknown',
        season: '',
        seasons: [],
        movies: [],
        repeats: 0,
        repeats2: 0,
        selectedMovie: null
    },
    computed: {
        lunchStatus() {
            return this.wantLunch ? 'Wants lunch.' : 'Not hungry';
        }
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
        getMovies() {
            this.getAll('movie');
        }
    },
    mounted() {
        this.getMovies();
    }
})