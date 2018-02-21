<?php
require_once '../classes/MovieRepository.php';

// setup once
//MovieRepository::init();

header('Content-type: application/json');
header('Access-Control-Allow-Origin: https://codepen.io/anon/pen/VQXNzG?editors=1010');

//header('Access-Control-Allow-Origin: http://localhost:4200');
//header('Access-Control-Allow-Origin: https://jscomplete.com');
//header('Access-Control-Allow-Origin: http://localhost:63342');
header('Access-Control-Allow-Headers: Content-Type');

echo ")]}'\n";

$method    = $_SERVER['REQUEST_METHOD'];
$path_info = $_SERVER['PATH_INFO'];
$request = explode('/', trim($path_info,'/'));
$body   = json_decode(file_get_contents('php://input'), true);
$object = array_shift($request);
$key = array_shift($request);

//var_dump($method) ;
//var_dump($path_info);
//var_dump($request);
//var_dump($body);
//var_dump($object);
//var_dump($key);

switch ($method) { 
    case 'GET':
      if(!$key) {
        $result = MovieRepository::retrieveAll($object);
      } else {
        $result = MovieRepository::retrieve($object, $key);
      }
      echo json_encode($result);
      break;
    case 'POST':
      MovieRepository::insert($object, $body);
      break;
    case 'DELETE':
    case 'PUT':
    default:
      echo "POST, DELETE and PUT not implemented";
  }