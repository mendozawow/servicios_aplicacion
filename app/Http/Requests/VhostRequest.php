<?php namespace App\Http\Requests;

use App\Http\Requests\Request;
use App\Domain;
use Auth;

class VhostRequest extends Request {

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
            $domain = Auth::user()->domains->find($this->route()->parameter('domains'));
            return $domain != null ? true : false;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
            return [
                    'serverName' => 'unique:apachevhost|server_name:'.Domain::find($this->route()->parameter('domains'))->name,
                    'documentroot' => 'document_root:'.Domain::find($this->route()->parameter('domains'))->name,
            ];
	}

}
