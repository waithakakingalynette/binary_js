function dividedarray(num){
    if(num.length<=1){
        return num;
    }
    let middle=Math.floor(num.length/2);
    let left=num.slice(0,middle);
    let right=num.slice(middle);
    console.log(left);
    console.log(right);
    return sorrtedarray(dividedarray(left),dividedarray(right))
}

function sorrtedarray(left,right){
    emptyarr=[];
    while(left.lenght&&right.length){
        if(left[0]<=right[0]){
            emptyarr.push(left.shift())
        }
        else{
            emptyarr.push(right.shift())
        }
    }
    return[...emptyarr,...left,...right]
}

function binary(num,target){
    let left=0
    let right=num.length-1
    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(left[middle]===target){
            return middle
        }
        else if(left[middle]>right){
            right=middle-1
        }
        else{
            left=middle+1
        }
    }
    return null
}

let num=[1,4,3,8,6,13,7,50,31];
let target=[13];
console.log(dividedarray(num));