<?php namespace App\Http\Controllers;

use Auth;

use App\Http\Requests\MailRequest;
use App\Http\Controllers\Controller;

use App\Helper;
use App\Mail;

class MailController extends Controller {
    
	public function __construct()
	{
            $this->middleware('auth');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index(MailRequest $request, $domainId)
	{
            $domain = Auth::user()->domains->find($domainId);
            $data = $domain->mails;
            foreach ($data as $mail){
                $mail->domain = $domain->name;
            }
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
	public function store(MailRequest $request,$domainId)
	{
            $mail = new Mail($request->all());
            $domain = Auth::user()->domains->find($domainId);
            $mail->id = $mail->name . '@' . $domain->name;
            $mail->domain_id = $domainId;
            $mail->uid = 5000;
            $mail->gid = 5000;
            $mail->home = '/var/spool/mail/virtual';
            $mail->maildir = $mail->name .'/';
            $mail->crypt = Helper::mysqlEncrypt($mail->crypt);
            mail($mail->id, 'Welcome!', 'Welcome to your inbox!');
            $mail->save();
            return response()->json(['success'=> 'true', 'data'=>$mail]);
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
	public function update(MailRequest $request, $domainId, $id)
	{
            $r=$request->all();
            $mail = Mail::find($id);

            if (!empty($request->input('name'))){
                $domain = Auth::user()->domains->find($domainId);
                $r['name'] = $request->input('name');                
            }

            if(!empty($request->input('crypt'))){
                $r['crypt'] = Helper::mysqlEncrypt($r['crypt']);
            } else { unset($r['crypt']); }
            $mail->update($r);

            return response()->json(['success'=> 'true']);      
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy(MailRequest $request, $domainId, $id)
	{
            Mail::find($id)->delete();
            return response()->json(['success'=> 'true']);
	}
}
