<?php
class DBConnection {
    private static $DB_CONN_URL = 'pgsql:host=localhost;port=5432;dbname=argonavis';
    private static $DB_USERNAME = 'postgres';
    private static $DB_PASSWORD = 'admin';

    private static $db = null;

    protected static function connect() {
        self::$db = 
            new PDO(self::$DB_CONN_URL,
                    self::$DB_USERNAME, 
                    self::$DB_PASSWORD);
    }

    public static function execute($sql, $values = []) {
        if(self::$db === null) {
            self::connect();
        }
        $statement = self::$db->prepare($sql);
        $statement->execute($values);
        return $statement;
    }

    public static function query($sql, $values = []) {
        $statement = self::execute($sql, $values);
        return $statement->fetchAll(PDO::FETCH_CLASS);
    }
}