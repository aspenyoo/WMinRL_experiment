/* Where your helper functions (random # generator, etc) live. Not necessary but
I find it helpful for decluttering. */

// random int generator
const getRandomInt = function(min, max) {
	min = Math.ceil(min);
  	max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// function that calls Papa.parse as a promise to load csv sequence
Papa.parsePromise = function(file) {
	return new Promise(function(complete,error) {
		Papa.parse(file, {
			download: true,
			header: false,
			dynamicTyping: true,
			complete, error
		});
	});
};

// function to retrieve online csvs
const getCSV = function(phase,n) {
  let csv = [];
  let requestP = new XMLHttpRequest();
  requestP.open("GET", `https://raw.githubusercontent.com/arzou/sequences/master/hsRLWM/RLWM_${phase}_seq${n}.csv`, false); // URL of csv
  requestP.send(null);

  let jsonObject = requestP.responseText.split(/\r?\n|\r/); // parses the csv as a json object
  for (var i = 0; i < jsonObject.length; i++) {
    let t = jsonObject[i].split(',');
    csv.push(t.map(Number)); // restructure the json object as 2D array
  }
  return csv;
}
