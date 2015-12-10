<?php namespace App\Http\Controllers;

use Auth;

use App\Http\Requests\DomainRequest;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Storage;

use App\Domain;
use App\Vhost;
use App\Record;
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

            // CREATE VIRTUAL HOST INFO
            $data = ['serverName' => $domain->name, 'documentRoot' => '', 'domain_id' => $domain->id];
            $vhost = new Vhost($data);
            $vhost->documentRoot = $vhost->generateDocumentRoot($vhost->documentRoot);
            $vhost->save();
            // CREATE DNS RECORDS
            $defaultDomain = 'macher.com.ar';
            $defaultIp = '54.232.254.54';

            //SOA
            $data = ['domain_id' => $domain->id, 'name' => $domain->name, 'type' => 'SOA', 'content' => $domain->name.'. postmaster.macher.com.ar. 1 3600 600 86400 3600', 'ttl' => 120, 'prio' =>0, 'change_date' => 0, 'disabled' => 0, 'auth' =>1];
            $record = new Record($data);
            $record->save();
            // A
            $data = ['domain_id' => $domain->id, 'name' => $domain->name, 'type' => 'A', 'content' => $defaultIp, 'ttl' => 120, 'prio' =>0, 'change_date' => 0, 'disabled' => 0, 'auth' =>1];
            $record = new Record($data);
            $record->save();
            // CNAME MAIL
            $data = ['domain_id' => $domain->id, 'name' => 'mail.'.$domain->name, 'type' => 'CNAME', 'content' => $domain->name, 'ttl' => 120, 'prio' =>0, 'change_date' => 0, 'disabled' => 0, 'auth' =>1];
            $record = new Record($data);
            $record->save();            
            // MX
            $data = ['domain_id' => $domain->id, 'name' => $domain->name, 'type' => 'MX', 'content' => 'mail.'.$domain->name, 'ttl' => 120, 'prio' =>10, 'change_date' => 0, 'disabled' => 0, 'auth' =>1];
            $record = new Record($data);
            $record->save();
            // CREATE FTP DOMAIN INFO
            $userData = [ 'username' => $domain->name, 'pass' => Helper::mysqlPassword(str_random(16)), 'domain_id' => $domain->id];
            $ftpUser = new FtpUser($userData);
            $ftpUser->save();
            return response()->json(['success'=> 'true', 'data'=>$domain]);
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
            $domain->delete();
            return response()->json(['success'=> 'true']);
	}

}
