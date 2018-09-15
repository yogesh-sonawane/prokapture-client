<template>
<div id="page-wrapper">  
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">User Master</h1>
        </div>
        <div>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              </tr>
            </thead>
            <tbody>
            <tr v-for="p of pr" :key="p.productId">
              <td>{{p.productId}}</td>
              <td>
                {{p.name}}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
    </div>
</div>
</template>
<script>
var {AxiosConfig} = require('../axios-ajax-config/axios-ajax-config');
var axiosConfig = new AxiosConfig();
export default {
  name: 'user-master-page',
  data: function() {
    return {
      pr: [],
    };
  },
  created() {
    axiosConfig.ajaxGet({endPoint: 'values/getallsystems'}).then(res => {
      this.pr = res.data;
    });
  },
};
</script>