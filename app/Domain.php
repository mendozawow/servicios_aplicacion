<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Domain extends Model {

    protected $table = 'domains';
    protected $fillable = ['id', 'name', 'user_id'];
    public $timestamps = false;    
    
    public function user(){
        $this->belongsTo('App\User');
    }
    
    public function records() {
        return $this->hasMany('App\Record');
    }

    public function mails() {
        return $this->hasMany('App\Mail');
    }
    
    public function ftpUsers() {
        return $this->hasMany('App\FtpUser');
    }
    
    public function vhosts() {
        return $this->hasMany('App\Vhost');
    }
}
