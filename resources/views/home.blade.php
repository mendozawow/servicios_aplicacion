@extends('app')

@section('htmlheader_title')
    Home
@endsection


@section('main-content')
<div class="container">
	<div class="row">
		<div class="col-md-10 col-md-offset-1">
			<div class="panel panel-default">
				<div class="panel-heading">Domains Manager</div>

				<div class="panel-body">
                                    <div id="vhosts"></div>
                                    <div id="mails"></div>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection
@section('extra-scripts')
    @include('partials.tableScripts')
@endsection
