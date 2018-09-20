var {
	AxiosConfig
} = require('../axios-ajax-config/axios-ajax-config');
var axiosConfig = new AxiosConfig();

export default {
	name: 'user-login',
	props: {
		message: String,
	},
	data: function () {
		return {
			user: {
				'userName': 'admin',
				'password': 'admin'
			}
		}
	},
	methods: {
		userLogin: function () {
			this.message = "";
			axiosConfig.ajaxPost({
				method: 'post',
				endPoint: 'UserMaster',
				data: this.user
			}).then(r => {
				console.log(r.data);
				this.$router.push({
					path: '/process',
				});
			}, err => {
				this.message = "User Not Found";
			})
		}
	}
};
