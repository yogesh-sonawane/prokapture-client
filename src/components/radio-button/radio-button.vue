<template>
<div class="col-md-3">
		<label class="control control-radio">
			{{label}}
			<input type="radio" :value="label" :name="name" v-model="radioButtonValue">
			<div class="control-indicator"></div>
		</label>
	</div>
</template>

<script>
export default {
	name: 'radio-button',
	props: ['name', 'label', 'value'],
	computed: {
		radioButtonValue: {
			get: function() {
				return this.value;
			},
			set: function() {
				this.$emit('change', this.label);
			},
		},
	},
};
</script>

<style>
.control {
	/* font-family: arial; */
	display: block;
	position: relative;
	padding-left: 24px;
	margin-bottom: 6px;
	padding-top: 2px;
	cursor: pointer;
	/* font-size: 15px; */
}
.control input {
	position: absolute;
	z-index: -1;
	opacity: 0;
}
.control-indicator {
	position: absolute;
	top: 2px;
	left: 0;
	height: 20px;
	width: 20px;
	background: #bbbbb9;
	border: 0px groove #d94343;
}
.control-group > div {
	padding: 0;
	padding-top: 6px;
}
.control-radio .control-indicator {
	border-radius: 50%;
}
.control:hover input ~ .control-indicator,
.control input:focus ~ .control-indicator {
	background: #cccccc;
}
.control input:checked ~ .control-indicator {
	background: #2aa1c0;
}
.control:hover input:not([disabled]):checked ~ .control-indicator,
.control input:checked:focus ~ .control-indicator {
	background: #2aa1c0;
}
.control input:disabled ~ .control-indicator {
	background: #e6e6e6;
	opacity: 0.6;
	pointer-events: none;
}
.control-indicator:after {
	box-sizing: unset;
	content: '';
	position: absolute;
	/* display: none; */
}
.control input:checked ~ .control-indicator:after {
	display: block;
}
.control-radio .control-indicator:after {
	left: 7px;
	top: 7px;
	height: 6px;
	width: 6px;
	border-radius: 50%;
	background: #ffffff;
}
.control-radio input:disabled ~ .control-indicator:after {
	background: #7b7b7b;
}
</style>
