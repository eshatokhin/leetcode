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
	var re = /^[IVXLCDM]*$/gi;
	if (!re.test(s))
	{
		console.log("argument must contain only characters 'I', 'V', 'X', 'L', 'C', 'D', 'M'");
	}

	var aRom = {
		"I":1,
		"V":5,
		"X":10,
		"L":50,
		"C":100,
		"D":500,
		"M":1000,
		"IV":4,
		"IX":9,
		"XL":40,
		"XC":90,
		"CD":400,
		"CM":900,
	};

	for (var i=0; i<s.length; i++)
	{
		var char = s[i];
		var nextChar = s[i+1];

		if (aRom[char+nextChar])
		{
			retVal += aRom[char+nextChar];
			i++;
		}
		else
		{
			retVal += aRom[char];
		}
	}

	console.log(retVal);
	//return retVal;
};

romanToInt("MCMXCIV");

