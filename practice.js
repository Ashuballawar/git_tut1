 maggimaking= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('lets make masala maggi');
    }, 9000);
 });
 heatoil= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('heat the oil');
    }, 1000);
 });
 
 addvegetable= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('add vegetable')
    }, 7000);
 })
 addmasala= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('add masala');
    }, 1000);
 })
 addwater= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('add water');
    }, 1000);
 })

 addnoodles= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('add noodles');
    }, 1000);
 })

 serveinplate= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('pour into plate');
    }, 1000);
 })

 async function maggireciepe(){
    //     let maggi1 =await maggimaking;
    //     console.log(maggi1)
    //    let oil1=await heatoil;
    //    console.log(oil1)
    //    let vegetable1=await addvegetable;
    //    console.log(vegetable1)
    //    let masala1=await addmasala;
    //    console.log(masala1)
    //    let water1=await addwater;
    //    console.log(water1)
    //    let noodles1=await addnoodles;
    //    console.log(noodles1)
    //    let plate1=await serveinplate;
    //    console.log(plate1);

   let [maggi1,oil1,vegetable1,masala1,water1,noodles1,plate1]=await Promise.all([maggimaking,heatoil,addvegetable,addmasala,addwater,addnoodles,serveinplate]);
console.log(maggi1,oil1,vegetable1,masala1,water1,noodles1,plate1);
 }
 maggireciepe();