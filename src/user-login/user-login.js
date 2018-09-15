var axios = require('axios');
const instance = axios.create({
    baseURL: 'http://localhost:63233/api/'
})

export default {
    name: 'user-login',
    props: {
        message: String,
    },
    data: function () {
        return {
            count: () => {
                instance.get('values/getproducts').then(res => {  
                    // var id = 123;
                    this.$router.push({
                        path: '/user-master/' + res
                    });
                });
            }
        }
    }
};