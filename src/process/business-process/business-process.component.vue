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
			<div class="row col-lg-12">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>#Sr</th>
							<th>Business Process Name</th>
							<th>Description</th>
							<th>Category</th>
							<th>Enabled?</th>
							<th>Created On</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="( bp, index) of businessProcs" :key="bp.businessProcessId">
							<td>
								{{index+1}}
							</td>
							<td>
								<router-link :to="{name: '/process/details', params: {id: (index+1), type: 'business-process'}}"> {{bp.businessProcessName}}</router-link>
							</td>
							<td>
								{{bp.bpShortDescription}}
							</td>
							<td>{{bp.categoryMaster.categoryName}}</td>
							<td>
								{{bp.isEnabled ? "Yes": "No"}}
							</td>
							<td>
								{{bp.lastUpdatedOn | formatDate}}
							</td>
							<td>
								[
								<router-link :to="{name: '/process/details', params: {id: bp.businessProcessId, type: 'business-process'}}">View</router-link> /
								<a style="cursor: pointer;" v-on:click="showDetails(bp);">Edit</a> ]
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="col-md-12">
				<div class="panel-title">
					<h3> Add Business Process</h3>
				</div>
			</div>
			<div class="col-md-12">&nbsp;</div>
			<form @submit.prevent="handleSubmit">
				<fieldset class="col-md-8">
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="businessProcessName">Business Process Name:</label>
								<input id="businessProcessName" placeholder="Business Process Name" type="text" v-model="businessProcess.businessProcessName" v-validate="'required'" name="Business Process Name" class="form-control" :class="{ 'is-invalid': submitted && errors.has('Business Process Name') }" />
								<span v-if="submitted && errors.has('Business Process Name')" class="invalid-feedback">{{ errors.first('Business Process Name') }}</span>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="bpShortDescription">Business Process Description:</label>
								<input id="bpShortDescription" placeholder="Business Process Description" type="text" v-model="businessProcess.bpShortDescription" v-validate="'required'" name="Business Process Description" class="form-control" :class="{ 'is-invalid': submitted && errors.has('Business Process Description') }" />
								<div v-if="submitted && errors.has('Business Process Description')" class="invalid-feedback">{{ errors.first('Business Process Description') }}</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="categoryId">Category:</label>
								<select v-model="businessProcess.categoryId" class="form-control">
									<option v-for="option in categories" :key="option.categoryId" :value="option.categoryId">
										{{ option.categoryName }}
									</option>
								</select>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="isEnabled">Is Enabled?:</label>
								<div class="control-group">
									<radio-button name="options" label="Yes" :value="isSelected" @change="changeValue" />
									<radio-button name="options" label="No" :value="isSelected" @change="changeValue" />
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<div class="row">
								<button :disabled="errors.any()" class="btn btn-primary">Submit</button> &nbsp;
								<button type="button" class="btn btn-danger">Cancel</button>
							</div>
						</div>
					</div>
				</fieldset>
			</form>
		</div>
	</div>
</template>
<script>
var {AxiosConfig} = require('../../axios-ajax-config/axios-ajax-config');
var axiosConfig = new AxiosConfig();
import radioButton from '../../components/radio-button/radio-button';
export default {
	name: 'business-process-component',
	components: {
		radioButton,
	},
	data: function() {
		return {
			isSelected: 'Yes',
			businessProcess: {
				businessProcessName: '',
				bpShortDescription: '',
				categoryId: 1,
				isEnabled: null,
				lastUpdatedOn: new Date(),
			},
			submitted: false,
			businessProcs: [],
			categories: [],
		};
	},
	methods: {
		changeValue: function(newValue) {
			this.isSelected = newValue;
		},
		handleSubmit: function() {
			this.submitted = true;
			var businessProcess = this.businessProcess;
			businessProcess.isEnabled = this.isSelected === 'Yes' ? true : false;
			this.$validator.validate().then(valid => {
				if (valid) {
					axiosConfig
						.ajaxPost({
							endPoint: 'businessprocess',
							data: businessProcess,
						})
						.then(r => {
							this.getBpData(r.data);
						});
				}
			});
		},
		showDetails: function(bp) {
			this.businessProcess.businessProcessName = bp.businessProcessName.trim();
			this.businessProcess.bpShortDescription = bp.bpShortDescription.trim();
			this.businessProcess.categoryId = bp.categoryId;
			this.businessProcess.isEnabled = bp.isEnabled;
			this.isSelected = bp.isEnabled ? 'Yes' : 'No';
		},
		getBpData: function() {
			axiosConfig
				.ajaxGetAsync({
					endPoint: 'BusinessProcess/getallbusinessprocesses',
				})
				.then(res => {
					this.businessProcs = res.data;
				});
		},
		getCategories: function() {
			axiosConfig
				.ajaxGetAsync({
					endPoint: 'BusinessProcess/get-categories',
				})
				.then(res => {
					this.categories = res.data;
				});
		},
	},
	created() {
		this.getBpData();
		this.getCategories();
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
