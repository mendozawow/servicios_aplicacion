<?php
namespace App;

use PragmaRX\Google2FA\Google2FA;
use Auth;
use App\Domain;

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
    
    public static function validateGoogleAuthenticator($user,$request){
        $authenticator = $request->input('authenticator');
        $google2fa = new Google2FA();
        $secret = $user->google2fa_secret;                   
        if (!$secret || $google2fa->verifyKey($secret, $authenticator)){
            return true;
        }
        else{
            return false;                         
        }
    }
    
    public static function authDomain($id){
        $user = Auth::user();
        if ($user->hasRole('admin')){
            return Domain::find($id) ? true : false;
        }
        $domain = $user->domains->find($id);
        return $domain != null ? true : false;        
    }
    
    /*
    public static function user($domainId = null){
        $user = Auth::user();
        if ($user->hasRole('admin')){
            return Domain::find($domainId)->user();
        }else{
            return $user;
        }
    }
    */
}