<?php

require_once 'model/Movie.php';
require_once 'model/Director.php';
require_once 'db/MovieDAO.php';

class MovieRepository {

    public static function reset() {
        MovieDAO::resetDB();
        DirectorDAO::resetDB();
        ActorDAO::resetDB();
        MovieActorDAO::resetDB();
    }

    public static function init() {
        self::reset();
        MovieDAO::insert(new Movie('tt0062622',
                                      '2001: A Space Odyssey',
                                      1968, 149,
                                      'http://bit.ly/2CoGsfN',
                                      new Director('Stanley Kubrick'), []));
        MovieDAO::insert(new Movie('tt0083658',
                                      'Blade Runner',
                                      1982, 117,
                                      'http://bit.ly/2CmhlKM',
                                      new Director('Ridley Scott'), []));
        MovieDAO::insert(new Movie('tt0451279',
                                      'Wonder Woman',
                                      2017, 141,
                                      'http://bit.ly/2BuWpnX',
                                      new Director('Patty Jenkins'), []));
        MovieDAO::insert(new Movie('tt0076759',
                                      'Star Wars',
                                      1977, 121,
                                      'http://bit.ly/2EKobPu',
                                      new Director('George Lucas'), []));

        $actors = [
            new Actor('nm0000197', 'Jack Nicholson'),
            new Actor('nm0001167', 'Shelley Duval')
        ];
        MovieDAO::insert(new Movie('tt0081505',
                                   'The Shining',
                                   1980, 146,
                                   'http://bit.ly/2F5Sy0w',
                                   new Director('Stanley Kubrick'), $actors));
        
        $actors1 = [
            new Actor('nm0001158', 'Keir Dullea'),
            new Actor('nm0516972', 'Gary Lockwood')
        ];
        $actors2 = [
            new Actor('nm0000148', 'Harrison Ford'),
            new Actor('nm0000442', 'Rutger Hauer'),
            new Actor('nm0000707', 'Sean Young'),
            new Actor('nm0000435', 'Daryl Hannah')
        ];
        $actors3 = [
            new Actor('nm2933757', 'Gal Gadot'),
            new Actor('nm1517976', 'Chris Pine')
        ];
        $actors4 = [
            new Actor('nm0000434', 'Mark Hamill'),
            new Actor('nm0000148', 'Harrison Ford'),
            new Actor('nm0000402', 'Carrie Fisher')
        ];

        foreach($actors1 as $actor) {
            MovieActorDAO::insert(new Movie('tt0062622'), $actor);
            ActorDAO::insert($actor);
        }
        foreach($actors2 as $actor) {
            MovieActorDAO::insert(new Movie('tt0083658'), $actor);
            ActorDAO::insert($actor);
        }
        foreach($actors3 as $actor) {
            MovieActorDAO::insert(new Movie('tt0451279'), $actor);
            ActorDAO::insert($actor);
        }
        foreach($actors4 as $actor) {
            MovieActorDAO::insert(new Movie('tt0076759'), $actor);
            ActorDAO::insert($actor);
        }
    }

    public static function retrieveAll($identifier) {
        switch($identifier) {
            case 'actor': 
              return ActorDAO::retrieveAll();
              break;
            case 'director':
              return DirectorDAO::retrieveAll();
              break;
            case 'movie':
              return MovieDAO::retrieveAll();
              break;
            default:
              return 'Not implemented!';
        }
    }

    public static function retrieve($identifier, $key) {
        switch($identifier) {
            case 'actor': 
              return ActorDAO::retrieve(new Actor($key, ''));
              break;
            case 'director':
              return DirectorDAO::retrieve(new Director($key));
              break;
            case 'movie':
              return MovieDAO::retrieveByImdb($key);
              break;
            default:
              return 'Not implemented!';
        }
    }

    public static function insert($identifier, $body) {
        switch($identifier) {
            case 'actor': 
              return ActorDAO::insert(new Actor($body["imdb"], $body["name"]));
              break;
            case 'director':
              return DirectorDAO::insert(new Director($body["name"]));
              break;
            case 'movie':
              return MovieDAO::insert(new Movie($body["imdb"], 
                                                $body["title"], 
                                                $body["year"], 
                                                $body["duration"],
                                                $body["poster"],
                                                new Director($body["director"]["name"]),
                                                [])); // Ignoring actor array
              break;
            default:
              return 'Not implemented!';
        }
    }

}