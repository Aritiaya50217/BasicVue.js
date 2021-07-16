new Vue ({
    el:"#vue-app" ,
    data : {
        message:"Hello World",
        language: "JavaScript",
        website:'https://www.youtube.com/watch?v=xgAuekvDqYo&list=PLEE74DyIkwEnQ3fqgLNRnBHdGONErIKzL&index=3'
    },
    methods:{
        getMessage:function(){
            // เข้าถึงข้อมูล
            return this.message
        },
        setMessage:function(n){
            // set ข้อความใหม่
            return this.message=n
        }

    }
})