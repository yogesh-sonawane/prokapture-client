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
            count: () => {
                axiosConfig.ajaxGet('values/getproducts').then(res => {                   
                    this.$router.push({
                        path: '/user-master/' + res
                    });
                });
            }
        }
    }
};