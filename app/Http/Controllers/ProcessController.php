<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Process;

class ProcessController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
            $header = ['pid','ppid','pcpu','pmem','nice','start_time','stat','tty','user','args'];
            $ps = explode("\n", trim(shell_exec('ps axo '.implode(',',$header).' --sort %cpu')));
            array_shift($ps);
            foreach($ps AS $process){
            $processes[]=new Process($header,preg_split('@\s+@', trim($process), sizeOf($header) ));
            }
            return response()->json(['success'=> 'true' , 'data'=>$processes]);     
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
	public function store()
	{
		//
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
		//
	}
        
        public function getCpuUsage(){
            $data = [];
            $data['cpu'] = shell_exec('mpstat | awk \'$12 ~ /[0-9.]+/ { print 100 - $12 }\'');
            $data['mem'] = shell_exec('free | grep Mem | awk \'{print $3/$2 * 100.0}\'');            
            return response()->json(['success'=> 'true' , 'data'=>$data]);
        }

}
