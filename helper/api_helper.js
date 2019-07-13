const supertest = require('supertest');


exports.sendGETRequest = async (baseUrl, apiEndPoint) => {
    try {
        let res = await supertest(baseUrl).get(apiEndPoint).retry(2)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .timeout(5000);
        return res;
    } catch (err) {
        console.log('Error in sending GET Request: ', err);
    }
};

exports.getToday = function date() {
    var d = new Date();
    var day =  d.getDay();
     return day;
}

