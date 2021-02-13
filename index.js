
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var isVal = false;

	if (s == null || s.length == 0 || s == "")
	{
		console.log("true");
		return true;
	}

	var re1 = new RegExp(/\[\]/, "g");
	var re2 = new RegExp(/\{\}/, "g");
	var re3 = new RegExp(/\(\)/, "g");

	if (!re1.test(s) && !re2.test(s) && !re3.test(s))
	{
		console.log(false);
		return false
	}

	var aRe = [];
	aRe.push(re1);
	aRe.push(re2);
	aRe.push(re3);
	for (var i = 0; i < aRe.length; i++)
	{
		s = s.replace(aRe[i], "");
	}
	return isValid(s);
};

isValid("((([][])))")

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

//romanToInt("MCMXCIV");

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (strs.length == 0) return "";
	var prefix = strs[0];
	for (var i = 0; i < strs.length; i++)
	{
		while (strs[i].indexOf(prefix) != 0)
		{
			prefix = prefix.substring(0, prefix.length - 1);
		}
		if (prefix == "") return "";
	}
	console.log(prefix);
}
//longestCommonPrefix(["cir","ciar"])
