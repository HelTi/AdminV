
var  testMixin ={
  created:function () {
    this.hello()
  },
  methods:{
    hello(){
      console.log('hello from mixin')
    }
  }
}

export default testMixin;
