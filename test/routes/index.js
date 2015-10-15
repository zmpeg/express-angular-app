
const assert = require('assert');
const routes = require("../../routes");
const helper = require("../helper")


describe('GET /', function() {

	it('Should return the index template', function(done) {
		req = new helper.Request();
		res = new helper.Response();

		routes.index(req, res);
		assert.equal(res.viewName, 'index');
		done();
	});

});

describe('POST /analyze', function() {

  it('Should return a average', function(done) {
    req = new helper.Request({ data: [['date1',1],['date2',3]]});
    res = new helper.Response();

    routes.analyze(req, res);
    assert.equal(res.data.avg, 2);
    done();
  })
});
