class stack{
    constructor(...l){
        this.l=l;
    };
     add(val){
        this.l.push(val);
     };
     delete(){
        this.l.pop();
     };
     print(){
        console.log(this.l);
     };
    };
    l=new stack(1,2,3);
    
    l.add(5)
    
    l.print();
    l.delete();
    l.print();