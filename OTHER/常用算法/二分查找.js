//二分查找，先要对数组进行排序
//可以修改下start=start||0; end=end||arr.length-1
function midFind(arr,start,end,find){
  var midIndex=Math.floor((start+end)/2),
      midValue=arr[midIndex];
  if(midValue===find){
    return midIndex;
  }else if(find<midValue){
    return midFind(arr,start,midIndex-1,find);//注意有 return
  }else{
    return midFind(arr,midIndex+1,end,find);
  }
  return null;//注意没有找到的情况
}
console.log(midFind([1,2,3,4,5,6,7],0,7,2));