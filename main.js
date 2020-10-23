import {toInteger,isInteger} from "./isInteger.js"
class Test{
	constructor(a,b,op){
	    //初始化对象的语句
	    this.a=a;
	    this.b=b;
	    this.op=op;
	};
	// 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
	// @param floatNum {number} 小数
	// @return {object}
	// {times:100, num: 314}
	        
	// 核心方法，实现加减乘除运算，确保不丢失精度
	// 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）
	// @param a {number} 运算数1
	// @param b {number} 运算数2
	// @param op {string} 运算类型，有加减乘除（add/subtract/multiply/divide）        
	operation(a,b,op){
		var o1 = toInteger(a);
		var o2 = toInteger(b);
		var n1 = o1.num; //整数
		var n2 = o2.num; //整数
		var t1 = o1.times; //位数
		var t2 = o2.times; //位数
		var max = t1 > t2 ? t1 : t2; //大的位数
		var result = null;
	    switch (op) {
		case 'add': //加
			{
				if (t1 === t2) { // 两个小数位数相同
					result = n1 + n2
				} else if (t1 > t2) { // o1 小数位 大于 o2
					result = n1 + n2 * (t1 / t2)
				} else { // o1 小数位 小于 o2
					result = n1 * (t2 / t1) + n2
				}
			return result / max;
		   }
		case 'subtract': //减
		   {
				if (t1 === t2) { // 两个小数位数相同
					result = n1 - n2
				} else if (t1 > t2) {
					result = n1 - n2 * (t1 / t2)
				} else {
					result = n1 * (t2 / t1) - n2
				}
				return result / max;
		   }
		case 'multiply'://乘
			{
            	result = (n1 * n2) / (t1 * t2);
				return result;
			}
       	case 'divide':
			{
				result = (n1 / n2) * (t2 / t1);
				return result
			}
        }
    };
    // 加减乘除的四个接口
    add(a, b){
        return this.operation(a,b,'add')
    };
    subtract(a, b){
        return this.operation(a, b, 'subtract')
    };
    multiply(a, b){
        return this.operation(a, b, 'multiply')
    };
    divide(a, b){
        return this.operation(a, b, 'divide')
    };

}
export default new Test