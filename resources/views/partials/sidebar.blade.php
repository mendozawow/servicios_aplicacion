<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
            <div class="pull-left image">
                <img src="/img/user2-160x160.jpg" class="img-circle" alt="User Image" />
            </div>
            <div class="pull-left info">
                <p>{{ Auth::user()->name }}</p>
                <!-- Status -->
                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>

        <!-- search form (Optional) 
        <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search..."/>
              <span class="input-group-btn">
                <button type='submit' name='search' id='search-btn' class="btn btn-flat"><i class="fa fa-search"></i></button>
              </span>
            </div>
        </form>
        -->
        <!-- /.search form -->

        <!-- Sidebar Menu -->
        <ul class="sidebar-menu">
            <li class="header">DOMAINS</li>
            <!-- Optionally, you can add icons to the links 
            {{ $first = true }}
            -->
            @foreach ($domains as $domain)
                @if ($first)
                    {{ $first = false }}
                    <li class="active" data-id='{{ $domain->id }}'><a href='#'><i class='fa fa-link'></i> <span>{{ $domain->name }}</span></a></li>
                @else
                    <li data-id='{{ $domain->id }}'><a href='#{{ $domain->id }}'><i class='fa fa-link'></i> <span>{{ $domain->name }}</span></a></li>
                @endif
            @endforeach
        </ul><!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
</aside>