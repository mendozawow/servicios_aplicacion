<?php namespace App\Http\Controllers;

use Auth;

use App\Http\Requests\DomainRequest;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Storage;

use App\Domain;
use App\FtpUser;
use App\Helper;

class DomainController extends Controller {
    
	public function __construct()
	{
		$this->middleware('auth');
	}    

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */  
        
	public function index()
	{
            $domains = Auth::user()->domains;
            return response()->json(['success'=> 'true' , 'data'=>$domains]);
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
	public function store(DomainRequest $request)
	{
            $domain = new Domain($request->all());
            Storage::disk('apache')->makeDirectory($domain->name);
            $domain->user_id = Auth::user()->id;
            $domain->save();
            $userData = [ 'username' => $domain->name, 'pass' => Helper::mysqlPassword(str_random(16)), 'domain_id' => $domain->id];
            $ftpUser = new FtpUser($userData);
            $ftpUser->save();
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
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
            $domain = Domain::find($id);
            foreach ($domain->vhosts as $data) {$data->delete();}
            foreach ($domain->mails as $data) {$data->delete();}
            foreach ($domain->ftpUsers as $data) {$data->delete();}
            foreach ($domain->records as $data) {$data->delete();}
            Domain::find($id)->delete();
            return response()->json(['success'=> 'true']);
	}

}
