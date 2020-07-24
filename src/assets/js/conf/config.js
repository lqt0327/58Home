let devUrl = 'http://localhost:3000';
let prodUrl = '';
export default {
    baseUrl:process.env.NODE_ENV==="production"?prodUrl:devUrl,
    path:"/",
    token:""
}