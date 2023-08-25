class node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}
class stack {
  constructor() {
    this.head = null
    this.temp = null
    this.size = 0
  }
  push(data) {
    this.temp = this.head
    this.head = new node(data, this.head)
    this.size++
  }
  pop() {
    this.head = this.temp
    this.size--
  }
}

l = new stack()

l.push(1)
l.push(2)
l.push(3)
l.pop()
console.log(l)
////////////////////////////////////
//Another solution

// class node {
//     constructor(data,next=null){
//         this.data=data;
//         this.next=next;
//     };
//     };
//     class stack{
//         constructor()
//         {
//            this.head=null;

//            this.size=0;
//         }
//         push(data)
//         {

//            let n = new node(data);

//            n.next=this.head;
//            this.head= n;
//            this.size++;
//         };
//         pop(){
//             this.head=this.head.next;
//             this.size--;
//         }

//     }
//     l=new stack();

// l.push(1);
// l.push(2);
// l.push(3);
// l.pop();
// console.log(l);
// nice work
