
const assert = require('assert');
const routes = require("../../routes");
const helper = require("../helper")


describe('/index.html', function() {

	it('Should return the index template', function(done) {
		req = new helper.Request();
		res = new helper.Response();

		routes.index(req, res);
		assert.equal(res.viewName, 'index');
		done();
	});

});
