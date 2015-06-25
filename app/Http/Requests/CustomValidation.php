<?php namespace App\Http\Requests;
 
use Illuminate\Validation\Validator;
 
class CustomValidation extends Validator {
    
    public function validateServerName($attribute, $value, $parameters){
        return preg_match('/^(?:.+\.)?'.$parameters[0].'$/', $value);
    }

    public function validateDocumentRoot($attribute, $value, $parameters){
        return !preg_match('/(\.\.)+/', $value);
        //return strpos($value,'/var/www/'.$parameters[0].'/') !== false;
    }
    
    public function validateRecordType($attribute, $value, $parameters){
        $checkVars = array('A','NS','SOA','MX','AAAA','CNAME','NAPTR','PTR','TXT','SRV');
        if(in_array($value, $checkVars)){
            return true;
        }
        return false;
    }
    
    public function validateHostname($attribute, $value, $parameters){
        return preg_match('/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/', $value);
    }
    
    public function validateRecordContent($attribute, $value, $parameters){
        switch ($parameters[0]){
            case 'A':
                return preg_match('/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/', $value);
                
            case 'AAAA':
                return preg_match('/^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$/', $value);
            
            case 'NS':
            case 'MX':
                return preg_match('/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/', $value);
                
            case 'SOA':
                return preg_match('/^((([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])*\s+){2,2}[0-9]+(\s+[0-9]+){4,4}$/', $value);
                
            default:
                return true;
        }
    }    
}