module.exports = function check(str, bracketsConfig) {
    const strToArr = str.split( '' );
    const arrLen = strToArr.length;
    const confLen = bracketsConfig.length;
    for (let count = 0; count < arrLen; count += 1) {
		for (let counter = 0; counter < confLen; counter += 1) {
			if (strToArr[count] === bracketsConfig[counter][0] && strToArr[count + 1] === bracketsConfig[counter][1]) {
                strToArr.splice(count, 2);
                count = -1; //!
            }
		}
    }

    const result = strToArr.length ? false : true;

	return result;
}