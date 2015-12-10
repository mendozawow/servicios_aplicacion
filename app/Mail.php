<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Mail extends Model {

    protected $table = 'postfix_users';
    protected $fillable = ['id', 'name', 'enabled', 'crypt', 'quota'];
    protected $hidden = ['uid','gid','home','maildir','clear','crypt','change_password'];
    public $timestamps = false;
    
    public function domain(){
        $this->belongsTo('App\Domain');
    }    
    
    public function aliases() {
        return $this->hasMany('App\MailAlias');
    }
}
