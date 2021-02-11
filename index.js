/**
 * 7 - easy
 * @param {number} x
 * @return {number}
 */
var reverse = function(x)
{
    var bNeg = x < 0;
	var minValue = -Math.pow(2, 31);
	var maxValue = Math.pow(2, 31)-1

	var retVal = parseInt(String(x).split("").reverse().join("")) * (bNeg ? -1 : 1);

	if (retVal < minValue || retVal > maxValue)
		return 0;

	return retVal;
	};

/**
 * 9 - easy
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	var retVal = false;
	if (x < 0)
	{
		return retVal;
		console.log(retVal);
	}

	var minValue = -Math.pow(2, 31);
	var maxValue = Math.pow(2, 31)-1

	var palVal = parseInt(String(x).split("").reverse().join(""));

	if (palVal < minValue || palVal > maxValue)
	{
		console.log(retVal);
		return retVal;
	}

	if (x == palVal)
		retVal = true;

	console.log(retVal);
	return retVal;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	var retVal = 0;

	console.log(retVal);
	return retVal;
};

romanToInt("III");