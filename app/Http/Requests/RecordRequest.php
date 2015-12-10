<?php namespace App\Http\Requests;

use App\Http\Requests\Request;
use App\Helper;

class RecordRequest extends Request {

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
                'name' => 'sometimes|required|hostname',
                'type' => 'sometimes|required|record_type',
                'content' => 'sometimes|required|record_content:'.$this->input('type'),
                'ttl' => 'sometimes|required|numeric|min:120,',
                'prio' => 'numeric',
                'disabled' => 'boolean',
                'auth' => 'boolean',
            ];
	}

}
