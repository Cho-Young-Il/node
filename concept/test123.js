const url = 'http://123.140.248.38:3000/openapi/shop/category/v1/create?service_type=cafe24test&mall_id=ectuecapi0009&data_type=json&auth_code=644bdcf6f9ec13358c6ef0a10a05566b&request%5B0%5D%5Bcategory_name%5D=%EC%83%81%ED%92%88%EB%B6%84%EB%A5%98%EB%AA%85%20TEST&request%5B0%5D%5Bcategory_no_parent%5D=1&request%5B0%5D%5Bdisplay_flag%5D=F';

const qs = require('qs');
const querystring = require('querystring');

console.log(querystring.stringify(querystring.parse(url)));
console.log(querystring.parse(url));