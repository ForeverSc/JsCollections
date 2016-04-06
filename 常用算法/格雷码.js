//http://blog.csdn.net/beiyeqingteng/article/details/7044471
function createGrayCode(n){//n位元，会产生2^n个格雷码
  var graycode=[];
  if(n===1){
    //生成两个最初始的字符串0，1
    graycode[0]="0";
    graycode[1]="1";
    return graycode;
  }
  var last=createGrayCode(n-1);
  for(var i=0;i<last.length;i++){
    //对称相加，0，1 分别加0，1 ==> 0变成 00 10  1反向对称变成 01 11   
    graycode[i]="0"+last[i];
    graycode[last.length*2-1-i]="1"+last[i];//注意这行
    //00 (01  11) 10
  }
  return graycode;
}
console.log(createGrayCode(3));


//格雷码还有一种实现方式是根据这个公式来的 G(n) =  B(n) XOR B(n+1), 这也是格雷码和二进制码的转换公式。
function getGrayCode(bitnum){
  for(var i=0;i<Math.pow(2,bitnum);i++){
    var graycode=(i>>1)^i;
    console.log(num2Binary(graycode,bitnum));
  }
}

function num2Binary(graycode,bitnum){
  var ret="";
  for(var i=bitnum-1;i>=0;i--){
    ret+=(graycode>>i)&1;
  }
  return ret;
}

console.log(getGrayCode(3));
//二进制码→格雷码（编码）：
//公式表示：  （G：格雷码，B：二进制码）
// 例如：二进制码0101，为4位数，所以其所转为之格雷码也必为4位数，因此可取转成之二进位码第五位为0，即0 b3 b2 b1 b0。
// 0 xor 0=0，所以g3=0
// 0 xor 1=1，所以g2=1
// 1 xor 0=1，所以g1=1
// 0 xor 1=1，所以g0=1
// 因此所转换为之格雷码为0111

//格雷码→二进制码（解码）：
//公式表示：  （G：格雷码，B：二进制码）
// 如果采集器器采到了格雷码：1010
// 就要将它变为自然二进制：
// 0 与第四位 1 进行异或结果为 1
// 上面结果1与第三位0异或结果为 1
// 上面结果1与第二位1异或结果为 0
// 上面结果0与第一位0异或结果为 0
// 因此最终结果为：1100 这就是二进制码即十进制 12
// 当然人看时只需对照表1一下子就知道是12