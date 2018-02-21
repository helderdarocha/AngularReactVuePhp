<?php
require_once 'DBConnection.php';
require_once 'ActorDAO.php';
require_once '../classes/model/Movie.php';
require_once '../classes/model/Actor.php';

class MovieActorDAO {
    public static function resetDB() {
        //DBConnection::execute('DROP TABLE movies_actors');
        DBConnection::execute('CREATE TABLE movies_actors (
            movie_imdb VARCHAR(9),
            person_imdb VARCHAR(9)
        )');
    }

    public static function actorsForMovie($imdb) {
        $actors = [];
        $db_results = DBConnection::query('SELECT person_imdb FROM movies_actors WHERE movie_imdb = ?', [$imdb]);
        foreach ($db_results as $db_result) {
            $actor = ActorDAO::retrieve(new Actor($db_result->person_imdb, ''));
            array_push($actors, $actor); 
        }
        return $actors;
    }

    public static function insert(Movie $movie, Actor $actor) {
        $result = DBConnection::execute(
            'INSERT INTO movies_actors (movie_imdb, person_imdb) VALUES (?,?)',
            [$movie->imdb, $actor->imdb]
        );
        return $result;
    }
}