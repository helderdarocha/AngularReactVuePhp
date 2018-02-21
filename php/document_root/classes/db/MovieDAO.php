<?php
require_once 'DBConnection.php';
require_once 'MovieActorDAO.php';
require_once 'DirectorDAO.php';
require_once 'ActorDAO.php';
require_once '../classes/model/Movie.php';

class MovieDAO {
    public static function resetDB() {
        //DBConnection::execute('DROP TABLE movies');
        DBConnection::execute('CREATE TABLE movies (
            imdb VARCHAR(9) PRIMARY KEY,
            title VARCHAR(128),
            year INTEGER,
            duration INTEGER,
            poster VARCHAR(512),
            director VARCHAR(128)
        )');
    }

    public static function retrieveAll() {
        $movies = [];
        $db_movies = DBConnection::query('SELECT * FROM movies');
        foreach ($db_movies as $db_movie) {
            $actors = MovieActorDAO::actorsForMovie($db_movie->imdb); 
            $director = DirectorDAO::retrieve(new Director($db_movie->director));
            $movie = new Movie($db_movie->imdb, 
                               $db_movie->title, 
                               $db_movie->year, 
                               $db_movie->duration,
                               $db_movie->poster,
                               $director,
                               $actors);
            array_push($movies, $movie); 
        }
        return $movies;
    }

    public static function retrieveByImdb($imdb) {
        $result = null;
        $db_result = DBConnection::query('SELECT * FROM movies WHERE imdb = ?', [$imdb]);
        if($db_result) {
            $db_movie = $db_result[0];
            $actors = MovieActorDAO::actorsForMovie($db_movie->imdb); 
            $director = DirectorDAO::retrieve(new Director($db_movie->director));
            $result = new Movie($db_movie->imdb, 
                                $db_movie->title, 
                                $db_movie->year, 
                                $db_movie->duration,
                                $db_movie->poster,
                                $director,
                                $actors);
        }
        return $result;
    }

    public static function insert(Movie $movie) {
        $result = DBConnection::execute(
            'INSERT INTO movies (imdb, title, year, duration, poster, director) VALUES (?,?,?,?,?,?)',
            [$movie->imdb, $movie->title, $movie->year, $movie->duration, $movie->poster, $movie->director->name]
        );

        if(!DirectorDAO::retrieve($movie->director)) {
            DirectorDAO::insert($movie->director);
        }
        
        if(count($movie->actors) > 0) {
            foreach($movie->actors as $actor) {
                if(!ActorDAO::retrieve($actor)) {
                    ActorDAO::insert($actor);
                }
                MovieActorDAO::insert($movie, $actor);
            }
        }
        return $result;
    }
}