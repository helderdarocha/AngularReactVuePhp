<?php

require_once 'DBConnection.php';
require_once '../classes/model/Actor.php';

class ActorDAO {
    public static function resetDB() {
        //DBConnection::execute('DROP TABLE actors');
        DBConnection::execute('CREATE TABLE actors (
            name VARCHAR(50),
            imdb VARCHAR(9) PRIMARY KEY
        )');
    }

    public static function retrieveAll() {
        $actors = [];
        $db_actors = DBConnection::query('SELECT * FROM actors');
        foreach ($db_actors as $db_actor) {
            $actor = new Actor($db_actor->imdb, $db_actor->name);
            array_push($actors, $actor); 
        }
        return $actors;
    }

    public static function retrieve(Actor $actor) {
        $result = null;
        $db_actor = DBConnection::query('SELECT * FROM actors WHERE imdb = ?', [$actor->imdb]);
        if($db_actor) {
            $result = new Actor($db_actor[0]->imdb, $db_actor[0]->name);
        }
        return $result;
    }

    public static function insert(Actor $actor) {
        $result = DBConnection::execute(
            'INSERT INTO actors (imdb, name) VALUES (?,?)',
            [$actor->imdb, $actor->name]
        );
        return $result;
    }
}