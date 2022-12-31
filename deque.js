class dequeNode{
    constructor(){
        this.value=0;
        this.pre=null;
        this.next=null;
    }
}

class deque{
    constructor(){

        this.head=this.tail=null;
    }
    isEmpty(){
        if(this.head==null){
            return true;}
            return false;
        
    }
    addFirst(data){
        let temp=new dequeNode();
        temp.value=data;
     if(this.head==null){
         
          this.head=temp;
          this.head.pre=null;
          this.head.next=null;
          this.tail=this.head;

     }
     else{
           temp.next=this.head;
           temp.prev=null;
           this.head.prev=temp;
           this.head=temp;
              
     }}
     addLast(data){
        let temp=new dequeNode();
        temp.value=data;
        if(this.head==null){
            this.head=temp;
            this.head.pre=null;
            this.head.next=null;
            this.tail=this.head;
        } 
        temp.prev=this.tail;
        temp.next=null;
        this.tail.next=temp;
        this.tail=temp;

    }
    removeFirst(){
        this.head=this.head.next;
            this.head.prev=null;
    }
    removeLast(){
        this.tail=this.tail.prev;
        this.tail.next=null;
    }
    display(){
        let temp=this.head;
        while(temp!=null){
            console.log(temp.value); 
            temp=temp.next;
        }
    }
  


}
class stack{
    constructor(){
        this.a=new deque();
    }
    push(data){
        this.a.addFirst(data);
    }
    pop(){
        this.a.removeFirst();
    }
show(){
    this.a.display();
}
}

let arr=new stack();
    arr.push(1);
    arr.push(2);
    arr.push(3);
    arr.pop();
    arr.show();
