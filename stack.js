class stack{
    constructor(){
        this.a=[];
    }
    push(element){
        this.a.unshift(element);
    }
    pop(){
        if(this.isEmpty()){
            return "empty";
        }
        this.a.shift();
        
    }
    isEmpty(){
        if(this.a.length==0){
            return true;
        }
        else return false;
    }
    peek(){
        if(this.isEmpty()){
            return "empty";
        }
        else return this.a[0];
    }



}
let arr=new stack();
arr.push(1);
arr.push(2);

arr.pop();
console.log(arr.peek());
console.log(arr.isEmpty());

