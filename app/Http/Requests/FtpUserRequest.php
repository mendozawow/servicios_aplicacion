<?php namespace App\Http\Requests;

use App\Http\Requests\Request;
use App\Helper;

class FtpUserRequest extends Request {

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
			'pass' => 'min:6',
		];
	}

}
