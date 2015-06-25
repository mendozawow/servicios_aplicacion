<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class FtpUser extends Model {

    protected $table = 'vsftp_accounts';
    protected $fillable = ['id', 'username', 'pass', 'domain_id'];
    protected $hidden = ['pass'];
    public $timestamps = false;
    
    public function domain(){
        $this->belongsTo('App\Domain');
    }
}
