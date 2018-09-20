<template>
	<select :v-model="vModel" class="form-control">
		<option v-for="op of businessProcesses" :key="op.businessProcessId" :value="op.businessProcessId">
			{{ op.businessProcessName }}
		</option>
	</select>
</template>

<script>
var {AxiosConfig} = require('../../axios-ajax-config/axios-ajax-config');
var axiosConfig = new AxiosConfig();
export default {
	name: 'bp-select-component',
	props: ['vModel'],
	data: function() {
		return {
			businessProcesses: [],
		};
	},
	created() {
		this.getBusinessProcesses();
	},
	methods: {
		getBusinessProcesses: function() {
			axiosConfig
				.ajaxGetAsync({
					endPoint: 'BusinessProcess/getallbusinessprocesses',
				})
				.then(res => {
					this.businessProcesses = res.data;
				});
		},
	},
};
</script>
