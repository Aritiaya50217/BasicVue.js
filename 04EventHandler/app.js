new Vue ({
    // el = element
    // #vue-app คือ id
    el:"#vue-app" ,
    data : {
        message:"Hello World",
        language: "JavaScript",
        website:'https://www.youtube.com/watch?v=xgAuekvDqYo&list=PLEE74DyIkwEnQ3fqgLNRnBHdGONErIKzL&index=3',
        year:2021
    },
    methods:{
        getMessage:function(){
            // เข้าถึงข้อมูล
            return this.message
        },
        setMessage:function(n){
            // set ข้อความใหม่
            return this.message=n
        },
        addYear:function(){
            this.year++;
            console.log(this.year);
        },
        subtractYear:function(){
            this.year--;
            console.log(this.year);
        }

    }
})