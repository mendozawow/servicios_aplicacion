<?php
namespace App;

class Helper {
    
    public static function mysqlPassword($raw) {
        return '*'.strtoupper(hash('sha1',pack('H*',hash('sha1', $raw))));
    }
    
    public static function mysqlEncrypt($raw) {
        return crypt($raw, '$5$' . md5(rand()));
    }
    
    public static function documentRoot(){
        return '/var/www';
    }
    
}