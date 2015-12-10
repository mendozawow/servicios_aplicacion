<?php namespace App\Http\Requests;

use App\Http\Requests\Request;
use App\Domain;
use App\Helper;

class VhostRequest extends Request {

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
            return Helper::authDomain($this->route()->parameter('domains'));
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
                    'documentRoot' => 'document_root:'.Domain::find($this->route()->parameter('domains'))->name,
            ];
	}

}
