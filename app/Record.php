<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Record extends Model {

    protected $table = 'records';
    protected $fillable = ['id', 'domain_id', 'name', 'type', 'content', 'ttl', 'prio', 'change_date', 'disabled', 'ordername', 'auth'];
    public $timestamps = false;    
    
    public function domain(){
        $this->belongsTo('App\Domain');
    }
}
