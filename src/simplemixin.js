const simpleMixin = {
    data(){
        return{
            fname:"Arjun",
            title: "Trainer"
        }
    },
    created: function(){
        this.greetings()
    },
    methods:{
        greetings: function(){
            console.log('Hello World')
        }
    }
}

export default simpleMixin