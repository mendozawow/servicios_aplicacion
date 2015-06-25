<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class MailAlias extends Model {

    protected $table = 'postfix_aliases';
    protected $fillable = ['pkid', 'mail', 'destination','enabled'];
    public $timestamps = false;    
    
    public function mail(){
        $this->belongsTo('App\Mail');
    }
}
