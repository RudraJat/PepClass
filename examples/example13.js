//Rest Parameters

function sum(...nums){
    let sum =0;
    let i=0;
    while(i<nums.length){
        sum+=nums[i];
        i++;
    }
    return sum;
}

const r1= sum(1,2,3,4);
const r2= sum(1,2,3,4,5,6,4);

console.log(r1);
console.log(r2);