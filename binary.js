function dividedArray(num){
    if(num.length<=1){
     return num
    }
    let middle=Math.floor(num.length/2);
    let left=num.slice(0,middle);
    let right=num.slice(middle);
    console.log(left);
    console.log(right);
    return sorrtedArray(dividedArray(left),dividedArray(right))
}

function sorrtedArray(left,right){
    emptyArr=[];
    while(left.length&&right.length){
        if(left[0]<right[0]){
            emptyArr.push(left.shift())
        }
        else{
            emptyArr.push(right.shift())
        }
    }
    return [...emptyArr,...left,...right]
}

function binary(num,target){
    let left=0
    let right=num.length-1
    while(left<=rught){
       let middle=Math.floor((left+right)/2)
       if(num[middle]===target){
        return middle
       }
       else if(num[middle]>right){
        right=middle-1
       }
       else{
        left=middle+1
       }
    }
    return null
}

let num=[1,7,8,4,5,2,6,3,9];
let target=[9];
console.log(dividedArray(num));