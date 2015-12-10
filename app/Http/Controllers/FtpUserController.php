<?php namespace App\Http\Controllers;

use Auth;

use App\Http\Requests\FtpUserRequest;
use App\Http\Controllers\Controller;

use App\FtpUser;
use App\Helper;

class FtpUserController extends Controller {
    
	public function __construct()
	{
            $this->middleware('auth');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index(FtpUserRequest $request, $domainId)
	{
            $domain = Auth::user()->domains->find($domainId);
            $data = $domain->ftpusers;
            return response()->json(['success'=> 'true' , 'data'=>$data]);     
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
	public function store(FtpUserRequest $request,$domainId)
	{
            $ftpuser = new FtpUser($request->all());
            $domain = Auth::user()->domains->find($domainId);
            $ftpuser->domain_id = $domainId;
            $ftpuser->name = $domain->name;
            $ftpuser->pass = Helper::mysqlPassword($ftpuser->pass);
            $ftpuser->save();
            return response()->json(['success'=> 'true', 'data'=>$ftpuser]);
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
	public function update(FtpUserRequest $request, $domainId, $id)
	{
            $r=$request->all();
            $ftpuser = FtpUser::find($id);
            $r['pass'] = Helper::mysqlPassword($r['pass']);
            $ftpuser->update($r);
            return response()->json(['success'=> 'true']);      
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy(FtpUserRequest $request, $domainId, $id)
	{
            FtpUser::find($id)->delete();
            return response()->json(['success'=> 'true']);
	}
}
