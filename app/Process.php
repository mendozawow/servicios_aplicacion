<?php namespace App;

class Process {
        
	public function __construct(array $header = array(),array $attributes = array())
	{
            $i = 0;
            foreach ($header as $h){
                $this->$h = $attributes[$i];
                $i++;
            }
	}

}
