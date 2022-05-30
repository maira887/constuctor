 class Me{
     constructor(name1,id1){
         this.name1;
         this.id1
     }
     getName(){
         console.log("call get name")
         console.log(this.name);
         console.log(this.id);
     }
 }
//  const date =new Date();
const myClass=new Me("maira yaseen",190);
console.log(myClass.name);
console.log(myClass.id);
myClass.getName()

const myClass123 = new Me("laiba",786);
console.log(myClass123.name);
console.log(myClass123.id);
myClass123.getName()