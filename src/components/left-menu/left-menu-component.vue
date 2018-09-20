<template>    
    <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
            <ul class="nav" id="side-menu">
                <li class="sidebar-search">
                    <div class="input-group custom-search-form">
                        <input type="text" class="form-control" placeholder="Search...">
                        <span class="input-group-btn">
                        <button class="btn btn-default" type="button">
                            <i class="fa fa-search"></i>
                        </button>
                    </span>
                    </div>
                </li>                
                <li>
                 <router-link to="/" >
                  <i class="fa fa-dashboard fa-fw"></i> Dashboard</router-link>
                </li>
                <li>
                    <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Data Management<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <router-link to="/process/business-process">Business Processes</router-link>
                        </li>
                        <li>
                            <router-link to="/process/sub-process">Sub Processes</router-link>
                        </li>
                         <li>
                            <router-link to="/systems/systems">Systems</router-link>
                        </li>
                         <li>
                            <router-link to="/systems/sub-systems">Sub Systems</router-link>
                        </li>
                        <li>
                            <router-link to="/reports">Reports</router-link>
                        </li>
                        <li>
                            <router-link to="/interfaces">Interfaces</router-link>
                        </li>
                        <li>
                            <router-link to="/data-elements">Data Elements</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="tables.html"><i class="fa fa-dashboard fa-fw">
                        </i> System Impact Dashboard</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-wrench fa-fw"></i> Product Configuration<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="panels-wells.html">DB Settings</a>
                        </li>
                        <li>
                            <a href="buttons.html">Meta-data Settings</a>
                        </li>                       
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="fa fa-license fa-fw"></i> License</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'left-menu-component',
};
</script>
