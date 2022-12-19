class Queue{
    constructor(size){
        this.a=[];
        this.f=0;
        this.r=0;
        this.size=size+1;
    }
    enqueue(data){
        if(this.isFull()){
            console.log("que is full");
            return -1;
        }
       else{ this.a.push(data);
        this.r=(this.r)%this.size+1;}
        
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("que is empty");
            return;
        }
        this.f=(this.f)%this.size+1;
        
    }
    isEmpty(){
        if((this.f%this.size)==(this.r%this.size)){
            return true;
        }
        return false;
    }
    isFull(){
        if((this.r+1)%this.size==(this.f)%this.size){
            console.log(this.r+" "+this.f);
            return true;
        }
        return false;
    }
    front(){
        if(this.isEmpty()){
           console.log("que is empty");
           return -1;
        }
         return this.a[this.f];
    }
    rear(){
        if(this.isEmpty()){
            console.log("que is empty");
            return -1;
        }
        return this.a[this.r-1];
        
    }
    display(){
       let b=[];
        for(let i=(this.f);i<(this.r);i++){
            b.push(this.a[i]);
        }
        console.log(b);
        
    }

}

let arr=new Queue(5);
arr.enqueue(1);
arr.enqueue(5);
arr.enqueue(2);
arr.enqueue(2);
arr.enqueue(9);

arr.dequeue();
arr.dequeue();
arr.dequeue();
arr.dequeue();
arr.dequeue();
arr.dequeue();
arr.enqueue(9);
arr.display();

