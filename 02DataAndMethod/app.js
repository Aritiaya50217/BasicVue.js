new Vue ({
    el:"#vue-app" ,
    data : {
        message:"Hello World",
        language: "JavaScript"
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