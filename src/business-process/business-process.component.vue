<template>
<div id="page-wrapper">  
      <div class="row">
            <h1 class="page-header">Business Process</h1>
        </div>
    <div class="row">
        <!-- <form  @submit.prevent="handleSubmit">
            <fieldset class="col-md-6">
             <div class="form-group">
                <label for="firstName">First Name</label>
                <input id="firstName" placeholder="First Name" type="text" v-model="user.firstName" v-validate="'required'" name="First Name" class="form-control" :class="{ 'is-invalid': submitted && errors.has('First Name') }" />
                <div v-if="submitted && errors.has('First Name')" class="invalid-feedback">{{ errors.first('First Name') }}</div>
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input placeholder="Last Name" type="text" v-model="user.lastName" v-validate="'required'" name="Last Name" class="form-control input-md" :class="{ 'is-invalid': submitted && errors.has('lastName') }" />
                <div v-if="submitted && errors.has('Last Name')" class="invalid-feedback">{{ errors.first('Last Name') }}</div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input placeholder="Email" type="email" v-model="user.email" v-validate="'required|email'" name="Email" class="form-control" :class="{ 'is-invalid': submitted && errors.has('Email') }" />
                <div v-if="submitted && errors.has('Email')" class="invalid-feedback">{{ errors.first('Email') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input placeholder="Password" type="password" v-model="user.password" v-validate="{ required: true, min: 6 }" name="password" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }" />
                <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Register</button>
            </div> 
            </fieldset>                     
        </form> -->
        <form @submit.prevent="handleSubmit" >
              <fieldset class="col-md-6">
                <div class="form-group">
                    <label for="businessProcessName">Business Process Name:</label>
                    <input id="businessProcessName" placeholder="Business Process Name" type="text" v-model="businessProcess.businessProcessName" v-validate="'required'" name="Business Process Name" class="form-control" :class="{ 'is-invalid': submitted && errors.has('Business Process Name') }" />
                    <span v-if="submitted && errors.has('Business Process Name')" class="invalid-feedback">{{ errors.first('Business Process Name') }}</span>
                </div>
                <div class="form-group">
                    <label for="businessProcessDescription">Business Process Description:</label>
                    <input id="businessProcessDescription" placeholder="Business Process Description" type="text" v-model="businessProcess.businessProcessDescription" v-validate="'required'" name="Business Process Description" class="form-control" :class="{ 'is-invalid': submitted && errors.has('Business Process Description') }" />
                    <div v-if="submitted && errors.has('Business Process Description')" class="invalid-feedback">{{ errors.first('Business Process Description') }}</div>
                </div>
                <div class="form-group">
                     <label for="category">Category:</label>
                     <select v-model="businessProcess.category" class="form-control">
                    <option v-for="option in categories" :key="option.value">
                        {{ option.text }}
                    </option>
                    </select>
                    <span>Selected: {{ businessProcess.category }}</span>
                </div>
                <div class="form-group">
                    <button :disabled="errors.any()" class="btn btn-primary">Register</button>
                </div>                 
              </fieldset>
        </form>
        <div class="col-md-12">&nbsp;</div>
        <div class="row col-lg-12">
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Business Process Id</th>
                    <th>Business Process Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Enabled?</th>
                    <th>Created On</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bp of businessProcs" :key="bp.businessProcessId">
                    <td>
                        {{bp.businessProcessId}}   
                    </td>
                    <td>
                        {{bp.businessProcessName}}
                    </td>
                    <td>
                        {{bp.bpShortDescription}}
                    </td>
                    <td>{{bp.categoryId}}</td>
                    <td>
                        {{bp.isEnabled}}
                    </td>
                    <td>
                        {{bp.lastUpdatedOn}}
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
  name: 'business-process-page',
  data: function() {
    return {
      businessProcess: {
        businessProcessName: '',
        BusinessProcessDescription: '',
        category: null,
        isEnabled: true,
        lastUpdatedOn: Date.now()
      },
      submitted: false,
      businessProcs: [],
      categories: [
        {value: 1, text: 'Category 1'},
        {value: 2, text: 'Category 2'},
        {value: 3, text: 'Category 3'},
      ],
    };
  },
  methods: {
    handleSubmit: function(e) {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          
        }
      });
    },
  },
  created() {
    axios
      .get('http://localhost:63233/api/BusinessProcess/getallbusinessprocesses')
      .then(res => {
        this.businessProcs = res.data;
      });
  },
};
</script>
<style>
.invalid-feedback {
  color: red;
}
.is-invalid {
  border-color: red;
}
</style>
