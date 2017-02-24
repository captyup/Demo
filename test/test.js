/**
 * Created by yup on 2017/2/21.
 */
const request = require('supertest');
const app = require('../app');
var should = require('should');
describe('Get /ksana/meta', function() {
    it('respond with json', function(done) {
        request(app)
            .get('/ksana/meta')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect({"date":"Tue Feb 14 2017 23:07:46 GMT+0800 (Taipei Standard Time)","versions":{"tokenizer":1,"builder":20161121},"bits":[6,13,5,5],"name":"taisho","column":3,"removePunc":true,"title":"大正新修大藏經","groupPrefix":["部類不明","阿含部類","本緣部類","般若部類","法華部類","華嚴部類","寶積部類","涅槃部類","大集部類","經集部類","密教部類","律部類","毘曇部類","中觀部類","瑜伽部類","論集部類","淨土宗部類","禪宗部類","史傳部類","事彙部類","敦煌寫本部類"],"endpos":474256677,"endtpos":84042775})
            .end(done);
    });

});

describe('Get /ksana/search', function() {
    it('respond with json', function (done) {
        request(app)
            .get('/ksana/search')
            .set('Accept', 'application/json')
            .query({searchtext: '剎那定者'})
            .expect(200)
            .expect(function(res){
                res.body.length.should.be.exactly(9);
            })
            .end(done);
    });
});

describe('post /ksana/getText', function() {
    it('respond with text', function (done) {
        request(app)
            .post('/ksana/getText')
            .send({hits: '27p983b0107'})
            .expect(200)
            .end(done);
    });
});