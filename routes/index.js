
exports.index = function(req, res, next){
	res.render('index');
};

exports.analyze = function(req, res, next){
  data = req.body.data;
  row2 = data.map(function(row) { return row[1]; });
  numRows = row2.length;
  row2total = row2.reduce(function(a, b) { return parseFloat(a) + parseFloat(b); });
  results = { avg: row2total/numRows };
  res.json(results);
};