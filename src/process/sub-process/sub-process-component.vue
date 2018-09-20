<template>
	<div id="page-wrapper">
		<div class="row">
			<h1 class="page-header">Business Sub Process</h1>
		</div>
		<div class="row">
			<div class="row col-lg-12">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>#Sr</th>
							<th>Sub Process Name</th>
							<th>Ass. Business Process</th>
							<th>Description</th>
							<th>Enabled?</th>
							<th>Created On</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(bp, index) of businessSubProcs" :key="bp.subProcessId">
							<td>
								{{index+1}}
							</td>
							<td>
								<router-link :to="{name: '/sub-process/details', params: {id: (index+1), type: 'sub-process'}}"> {{bp.subProcessName}}</router-link>
							</td>
							<td>
								{{bp.businessProcess.businessProcessName}}
							</td>
							<td>
								{{bp.spShortDescription}}
							</td>
							<td>
								{{bp.isEnabled ? "Yes": "No"}}
							</td>
							<td>
								{{bp.lastUpdatedOn | formatDate}}
							</td>
							<td>
								[
								<router-link :to="{name: '/sub-process/details', params: {id: bp.subProcessId, type: 'sub-process'}}">View</router-link> /
								<a style="cursor: pointer;" v-on:click="showDetails(bp);">Edit</a> ]
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="col-md-12">
				<div class="panel-title">
					<h3> Add Business Sub Process</h3>
				</div>
			</div>
			<div class="col-md-12">&nbsp;</div>
			<form @submit.prevent="handleSubmit">
				<fieldset class="col-md-8">
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="subProcessName">Business Sub Process Name:</label>
								<input id="subProcessName" placeholder="Business Sub Process Name" type="text" v-model="subProcess.subProcessName" v-validate="'required'" name="Business Sub Process Name" class="form-control" :class="{ 'is-invalid': submitted && errors.has('Business Sub Process Name') }" />
								<span v-if="submitted && errors.has('Business Sub Process Name')" class="invalid-feedback">{{ errors.first('Business Sub Process Name') }}</span>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="spShortDescription">Business Sub Process Description:</label>
								<input id="spShortDescription" placeholder="Business Sub Process Description" type="text" v-model="subProcess.spShortDescription" v-validate="'required'" name="Business Sub Process Description" class="form-control" :class="{ 'is-invalid': submitted && errors.has('Business Sub Process Description') }" />
								<div v-if="submitted && errors.has('Business Sub Process Description')" class="invalid-feedback">{{ errors.first('Business Sub Process Description') }}</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="Business Process">Associated Business Process:</label>
								<bp-select-component v-model="subProcess.businessProcessId"></bp-select-component>
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
import bpSelectComponent from './bp-select-component';
import radioButton from '../../components/radio-button/radio-button';
export default {
	name: 'sub-process-component',
	components: {bpSelectComponent, radioButton},
	data: function() {
		return {
			isSelected: 'Yes',
			subProcess: {
				businessProcess: {},
				businessProcessId: 1, // BusinessProcessId
				subProcessName: '', // SubProcessName
				spShortDescription: '',
				isEnabled: true,
				lastUpdatedOn: new Date(),
			},
			submitted: false,
			businessSubProcs: [],
		};
	},
	created() {
		this.getAllBusinessSubProcesses();
	},
	methods: {
		changeValue: function(newValue) {
			this.isSelected = newValue;
		},
		handleSubmit: function() {
			this.submitted = true;
			var subProcess = this.subProcess;
			subProcess.isEnabled = this.isSelected === 'Yes' ? true : false;
			this.$validator.validate().then(valid => {
				if (valid) {
					axiosConfig
						.ajaxPost({
							endPoint: 'BusinessSubProcess',
							method: 'post',
							data: subProcess,
						})
						.then(r => {
							this.getAllBusinessSubProcesses(r.data);
						});
				}
			});
		},
		showDetails: function(bp) {
			this.subProcess.businessProcessId = bp.businessProcess.businessProcessId;
			this.subProcess.subProcessName = bp.subProcessName.trim();
			this.subProcess.spShortDescription = bp.spShortDescription.trim();
			this.subProcess.isEnabled = bp.isEnabled;
			this.isSelected = bp.isEnabled ? 'Yes' : 'No';
		},
		getAllBusinessSubProcesses: function() {
			axiosConfig
				.ajaxGetAsync({
					endPoint: 'BusinessSubProcess/get-all-business-sub-processes',
				})
				.then(res => {
					this.businessSubProcs = res.data;
				});
		},
	},
};
</script>
