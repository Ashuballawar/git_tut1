console.log('person1: show ticket');
console.log('person2: show ticket');

// const promisewifebringingticket=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// });

// const getpopcorn=promisewifebringingticket.then((t)=>{
//     console.log('wife:I have the tics');
//     console.log('husband: we should go in');
//     console.log('wife:no i am hungry');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} popcorn`);
//     })
// });
// const gebutter=getpopcorn.then((t)=>{
//     console.log('husband:I got some popcorn');
//     console.log('husband:we should go in');
//     console.log('wife:I need butter');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} butter`);
//     })
// });
// gebutter.then((t)=>console.log(t));
const preMovie=async()=>{
    const promisewifebringingticket= new Promise((resolve, reject) => {
        setTimeout(()=>reject(),3000);
    });
    let getpopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
    let addbutter=new Promise((resolve, reject) => {
        resolve('butter');
    })
    let getdrink=new Promise((resolve, reject) => {
        resolve('coke');
    })
    let ticket
   try{ ticket=await promisewifebringingticket;}
   catch{
            ticket='sad face'
   }

    // console.log(`wife:I have the ${ticket}`);
    // console.log('husband: we should go in');
    // console.log('wife:no i am hungry');
    let popcorn=await getpopcorn;
    // console.log(`husband:I got some ${popcorn}`);
    // console.log('husband:we should go in');
    // console.log('wife:I need butter');
    let butter=await addbutter;
    // console.log(`husband:i got some ${butter} on popcorn`);
    // console.log('husband:anything else darling?');
    // console.log('wife:I need coke');
    let coke=await getdrink;
    // console.log(`husband: I got ${coke}`);
    // console.log('wife:lets got we are getting late');
    // console.log('husband:thank you for reminder grins');
    let[Popcorn,Butter,Coke]=await Promise.all([popcorn,butter,coke]);
    console.log(`${Popcorn},${Butter},${Coke}`);

    return ticket;
}


preMovie().then((m)=>console.log(`person3: shows ${m}`));
console.log('person 4:show ticket');
console.log('person 5:show ticket');
























