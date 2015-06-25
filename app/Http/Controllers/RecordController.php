<?php namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\RecordRequest;
use App\Http\Controllers\Controller;
use App\Record;

class RecordController extends Controller {
    
	public function __construct()
	{
            $this->middleware('auth');
	}    

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index(RecordRequest $request, $domainId)
	{
            $records = Auth::user()->domains->find($domainId)->records;
            return response()->json(['success'=> 'true' , 'data'=>$records]);
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
	public function store(RecordRequest $request, $domainId)
	{
            $record = new Record($request->all());
            $record->domain_id = $domainId;
            $record->save();
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
	public function update(RecordRequest $request, $domainId, $id)
	{
            $r=$request->all();
            $record = Record::find($id);
            $record->update($r);
            return response()->json(['success'=> 'true']);      
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy(RecordRequest $request, $domainId, $id)
	{
            Record::find($id)->delete();
            return response()->json(['success'=> 'true']);
	}
}
