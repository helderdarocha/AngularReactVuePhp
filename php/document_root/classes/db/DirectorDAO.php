<?php

require_once 'DBConnection.php';
require_once '../classes/model/Director.php';

class DirectorDAO {
    public static function resetDB() {
        //DBConnection::execute('DROP TABLE directors');
        DBConnection::execute('CREATE TABLE directors (
            name VARCHAR(50) PRIMARY KEY
        )');
    }

    public static function retrieveAll() {
        $directors = [];
        $db_directors = DBConnection::query('SELECT * FROM directors');
        foreach ($db_directors as $db_director) {
            $director = new Director($db_director->name);
            array_push($directors, $director); 
        }
        return $directors;
    }

    public static function retrieve(Director $director) {
        $result = null;
        $db_director = DBConnection::query('SELECT * FROM directors WHERE name = ?', [$director->name]);
        if($db_director) {
            $result = new Director($db_director[0]->name);
        }
        return $result;
    }

    public static function insert(Director $director) {
        $result = DBConnection::execute(
            'INSERT INTO directors (name) VALUES (?)',
            [$director->name]
        );
        return $result;
    }
}