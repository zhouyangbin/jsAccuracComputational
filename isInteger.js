// * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
const  toInteger = (floatNum)=> {
            var ret = {times: 1, num: 0};
            if (isInteger(floatNum)) {
                ret.num = floatNum;
                return ret
            }
            var strfi = floatNum + '';
            var dotPos = strfi.indexOf('.');
            var len = strfi.substr(dotPos + 1).length;
            var times = Math.pow(10, len);
            var intNum = parseInt(floatNum * times + 0.5, 10);
            ret.times = times;
            ret.num = intNum;
            return ret
        };
        /*
         * 判断obj是否为一个整数
         */
const  isInteger = (obj)=> {
            return Math.floor(obj) === obj
        }
export { toInteger,isInteger }
