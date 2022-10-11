function findTriplets(arr,target){
let end=[]
for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    for(let k=j+1;k<arr.length;k++)
  if(arr[i]+arr[j]+arr[k]==target){
    end.push(arr[i],arr[j],arr[k])
  }
    }
}
   return end
}
let arr=[3,6,5,2,10]
let target =11
let triplets=findTriplets(arr,target)
console.log(triplets)
