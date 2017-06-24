module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(
    	'o) 最小值 = ${sequence.minimum()}
		o) 最大值 = ${sequence.maximum()}
		o) 序列中的元素个数 = ${sequence.number()}
		o) 平均值 = ${sequence.average()}');
	// Write your code here
};

class Sequence {
  constructor(input) {
  	 var min,max,sum = 0;
    for(var i=0;i<input.length;i++){
	var value = input[i];
        sum += value;
	if(!i){
		min  = value;
		max  = value;
		continue;
	}
	if(value<min){
		min = value;
	}
	
	if(value>max){
		max = value;
	}
    }
    this.min = min;
    this.max = max;
    this.sum = sum;
    this.input = input;
    // Write your code here
  }

  minimum() {
  	return this.min;
    // Write your code here
  }
   maximum(){
    return this.max;
  }

  average(){
    return (this.sum/this.input.length).toFixed(2);
  }
  
  number(){
    return this.input.length;
  }

  // Write your code here
}
