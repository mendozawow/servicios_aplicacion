<?php namespace App\Http\Requests;

use App\Http\Requests\Request;
use Auth;

class RecordRequest extends Request {

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
