const Movie = (props) => {
    return (
        <div>
          <img src={props.poster} width="75" />
          <div>{props.title} ({props.year}) {props.duration} min. by {props.director.name}<br/>
          Cast:<ul> {props.actors.map(item => <Actor key={item.imdb} {...item} />)}</ul></div>
        </div>
    )
}

const MovieList = (props) => {
    return (
        <div>
            <h2>Movies</h2>
            <div>
            {props.data.map(item => <Movie key={item.imdb} {...item} />)}
            </div>
        </div>
    )
}

const Actor = (props) => {
    return (
        <div>
          <li>{props.name} (IMDB: {props.imdb})</li>
        </div>
    )
}

const ActorList = (props) => {
    return (
        <div>
            <h2>Actors</h2>
            <ul>
            {props.data.map(item => <Actor key={item.imdb} {...item} />)}
            </ul>
        </div>
    )
}

const Director = (props) => {
    return (
        <div>
          <li>{props.name}</li>
        </div>
    )
}

const DirectorList = (props) => {
    return (
        <div>
            <h2>Directors</h2>
            <ul>
            {props.data.map(item => <Director key={item.name} {...item} />)}
            </ul>
        </div>
    )
}

class App extends React.Component {

    state = {
       directors: [],
       actors: [],
       movies: []
    }
    
    componentDidMount = () => {
        axios.get("http://localhost:8080/services/webapi.php/director")
        	.then(res => {
              this.setState(prev => ({
                  directors: res.data,
                  actors: prev.actors,
                  movies: prev.movies
              }));
          });

       axios.get("http://localhost:8080/services/webapi.php/actor")
        	.then(res => {
              this.setState(prev => ({
                  directors: prev.directors,
                  actors: res.data,
                  movies: prev.movies
              }));
          });
          
       axios.get("http://localhost:8080/services/webapi.php/movie")
        	.then(res => {
              this.setState(prev => ({
                  directors: prev.directors,
                  actors: prev.actors,
                  movies: res.data
              }));
          });
    }

    render() {
        return (
            <div>
                <MovieList data={this.state.movies} />
                <hr />
                <ActorList data={this.state.actors} />
                <hr />
                <DirectorList data={this.state.directors} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));