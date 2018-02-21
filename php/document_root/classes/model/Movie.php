<?php 

require_once 'Actor.php';
require_once 'Director.php';

class Movie {
    public $imdb;
    public $title;
    public $year;
    public $duration;
    public $poster;
    public $actors = [];
    public $director;

    public function __construct($imdb, $title='', $year=0, $duration = 0,
                                $poster = 'http://place-hold.it/150x200',
                                Director $director=null,
                                $actors = []) {
        $this->imdb = $imdb;
        $this->title  = $title;
        $this->year = $year;
        $this->duration = $duration;
        $this->poster = $poster;
        $this->director = $director;
        $this->actors = $actors;
        
    }

    public function addActor(Actor $actor) {
        array_push($actors, $actor);
    }
}