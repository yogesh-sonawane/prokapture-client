import VueRouter from 'vue-router'
import userLogin from './user-login/user-login.vue';
import landingPage from './landing/landing.vue';
import processMain from './process/process.vue';
import businessProcess from './process/business-process/business-process.vue';
import businessProcessDetails from './process/process-details/business-process-details.vue';
import subProcessDetails from './process/sub-process-details/sub-process-details.vue';
import subProcess from './process/sub-process/sub-process.vue';
const appRouters = [{
		path: '',
		component: userLogin,
	},
	{
		path: '/user-login',
		component: userLogin
	},
	{
		path: '/landing',
		component: landingPage,
	},
	{
		path: '/process',
		component: processMain,
		children: [{
			path: '',
			component: businessProcess
		}, {
			path: 'business-process',
			name: '/process/business-process',
			component: businessProcess
		}, {
			path: 'details',
			name: '/process/details',
			props: {
				type: String,
				id: Number
			},
			component: businessProcessDetails
		}, {
			name: '/sub-process/details',
			path: '/sub-process/details',
			component: subProcessDetails
		}, {
			path: 'sub-process',
			name: '/process/sub-process',
			component: subProcess
		}]
	}
];

export default new VueRouter({
	mode: 'history',
	base: '/',
	fallback: false,
	routes: appRouters
});
