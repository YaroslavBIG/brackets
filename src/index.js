module.exports = function check(str, bracketsConfig) {
    const openBrackets = []
    const closeBrackets = []
    for (const arr of bracketsConfig) {
        openBrackets.push(arr[0]);
        closeBrackets.push(arr[1]);
    }
    //console.log(str)
    const strToArr = str.split('');
    const stack = [];
    for (const brackets of strToArr) {
        //console.log(brackets)
        if (openBrackets.includes(brackets)) {
            stack.push(openBrackets.indexOf(brackets))
        }
        if (closeBrackets.includes(brackets)) {
                if (closeBrackets.indexOf(brackets) === stack.pop()) {
                } else {
                    return false;
                }
        }
    };
    const result = stack.length == 0;
    //console.log(openBrackets, closeBrackets)
    return result;
}