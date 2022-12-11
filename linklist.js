
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}



/**
 * @param {number} N
 * @param {Node} head
 * @return {Node}
*/

class Solution {
    divide(N,head){
      //code here
      
     
      let h1=head;
      let h2=head;
      
      let result=head;;
      let result1=result;
      while(h2!=null){
            if((h2.data%2)!=0){
               console.log(h2.data);
            result1.data=h2.data;
            
             
           result1=result1.next;
          
          }
           h2=h2.next;
       }
    
      while(h1!=null){
          if((h1.data%2)==0){
              result1.data=h1.data;
             console.log(h1.data);
               
           result1=result1.next;
          
          }
           h1=h1.next;
      }
       
      
      // while(evencount!=0){
      //   result1.data=even.data;
      //     result1=result1.next;
      //     even=even.next;
      //      evencount--;
      // }
      // while(oddcount!=0){
        
      //      result1.data=odd.data;
      //     result1=result1.next;
      //     odd=odd.next;
      //     oddcount--;
      // }
      
      
      
      
      
      
      return result;
    }
  }
  