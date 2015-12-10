<?php namespace App\Http\Controllers;

use Auth;

use App\Http\Requests\VhostRequest;
use App\Http\Controllers\Controller;

use App\Vhost;

class VhostController extends Controller {

    
	public function __construct()
	{
		$this->middleware('auth');
	} 
        
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index(VhostRequest $request, $domainId)
	{
            $domain = Auth::user()->domains->find($domainId);
            $vhosts = $domain->vhosts;
            foreach($vhosts as $v){
                $v->documentRoot = str_replace($v->documentRootPath(),'',$v->documentRoot);
            }
            return response()->json(['success'=> 'true' , 'data'=>$vhosts]);
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
	public function store(VhostRequest $request, $domainId)
	{
            $vhost = new Vhost($request->all());
            $vhost->domain_id = $domainId;
            $vhost->documentRoot = $vhost->generateDocumentRoot($vhost->documentRoot);
            $vhost->save();
            return response()->json(['success'=> 'true', 'data'=>$vhost]);
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
	public function update(VhostRequest $request, $domainId, $id)
	{
            $r=$request->all();
            $vhost = Vhost::find($id);
            if($r['documentRoot']){
                
                $r['documentRoot'] = $vhost->generateDocumentRoot($r['documentRoot']);
            }
            $vhost->update($r);
            return response()->json(['success'=> 'true']);      
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy(VhostRequest $request, $domainId, $id)
	{
            Vhost::find($id)->delete();
            return response()->json(['success'=> 'true']);
	}
}
