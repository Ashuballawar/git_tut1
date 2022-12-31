
function partition(l,h,a){
let i=l+1;
let j=h;
let p=a[l];
do{                  //[12, 5 ,787, 1, 23];
    while(a[i]<p){
        i++;
    }
    while(a[j]>p){
        j--;
    }
    if(i<j){
        let temp=a[i];
        a[i]=a[j];
        a[j]=temp;
    }
}while(i<j)
console.log(j);
let temp=a[l];
a[l]=a[j];
a[j]=temp;  
 return j;}

function quicksort(l,h,a){
   if(l<h){
   
    let j;
    j=partition(l,h,a);

    quicksort(l,j-1,a);
    quicksort(j+1,h,a);
   }
 
}
let arr=[12, 5 ,787, 1, 23];
quicksort(0,4,arr);
console.log(arr);