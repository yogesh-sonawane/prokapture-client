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
const axios = require('axios');
export default {
  name: 'user-master-page',
  data: function() {
    return {
      pr: [],
    };
  },
  created() {
    axios.get('http://localhost:63233/api/values/getallsystems').then(res => {
      this.pr = res.data;
    });
  },
};
</script>