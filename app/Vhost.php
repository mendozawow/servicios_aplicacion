<?php namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper;

class Vhost extends Model {
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'apachevhost';
    public $timestamps = false;
    

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['serverName', 'documentroot', 'domain_id'];
        
    public function domain(){
        return $this->belongsTo('App\Domain');
    }
    
    public function documentRootPath(){
        return Helper::documentRoot().'/'.$this->domain->name;
    }
}
