<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Requests\UserRequest;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\Registrar;

use Hash;
use Auth;
use PragmaRX\Google2FA\Google2FA;
use App\User;

class UserController extends Controller {
        protected $auth;
        protected $registrar;
    
	public function __construct(Guard $auth, Registrar $registrar)
	{
            $this->auth = $auth;
            $this->registrar = $registrar;            
            $this->middleware('auth');
	}    
   
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index(UserRequest $request)
	{
            $users = User::all();
            return response()->json(['success'=> 'true' , 'data'=>$users]);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(UserRequest $request)
	{	
		$req = $request->all();
		$req['password_confirmation'] = $req['password'];	
		$validator = $this->registrar->validator($req);
		if ($validator->fails())
		{
			$this->throwValidationException(
				$request, $validator
			);
		}

		$this->registrar->create($request->all());
        return response()->json(['success'=> 'true']);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(UserRequest $request, $id)
	{
            $user = User::find($id);
            $r=$request->all();
            //$user->update($r);
            if($request->password != ''){
                $user->fill([
                    'password' => Hash::make($request->password)
                ])->save();
            }
            if($request->google2fa_secret != ''){
                $user->fill([
                    'google2fa_secret' => ''
                ])->save();
            }
            
            return response()->json(['success'=> 'true']);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
            User::find($id)->delete();
            return response()->json(['success'=> 'true']);      
	}
        
    public function generateAuthenticatorKey(){
        $google2fa = new Google2FA();      
        $user = Auth::user();
        $user->google2fa_secret = $google2fa->generateSecretKey();
        $user->save();
        
        $google2fa_url = $google2fa->getQRCodeGoogleUrl(
            '',
            $user->email,
            $user->google2fa_secret
        );
        return response()->json(['success'=> 'true' , 'data'=>$google2fa_url]);
    }

    public function getConsoleApiKey(){
    	$user = Auth::user();
		$secret = '';
		$authobj = array(
			'url' => "",
		    'api_key' => '',
		    'upn' => $user->email,
		    'timestamp' => time() . '0000',
		    'signature_method' => 'HMAC-SHA1',
		    'api_version' => '1.0'
		);
		$authobj['signature'] = hash_hmac('sha1', $authobj['api_key'] . $authobj['upn'] . $authobj['timestamp'], $secret);
		//$valid_json_auth_object = json_encode($authobj)
		return response()->json(['success'=> 'true' , 'data'=>$authobj]);
    }
}
