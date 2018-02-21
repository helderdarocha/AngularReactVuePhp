<?php

class Actor {
    public $imdb;
    public $name;

    public function __construct($imdb, $name = '') {
        $this->imdb = $imdb;
        $this->name = $name;
    }
        
}