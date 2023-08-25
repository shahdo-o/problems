class user{
    constructor(name=null,age=0,address=null){
        this.name=name;
        this.age=age;
        this.address=address;
    };
    modi(name,age,address) {
        this.name=name||this.name;
        this.age=age||this.age;
        this.address=address||this.address;
    };
    print(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.address);
    }
}
let obj= new user("shahd",20,"lll");
obj.print();
obj.modi("nour");
obj.print();


