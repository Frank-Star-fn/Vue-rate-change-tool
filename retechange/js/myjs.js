const app = {
  data() {
    return {
      kilometers : 0,
      meters:0
    }
  },
  watch : {
	  kilometers:function(val) {
		  this.kilometers = val;
		  this.meters = this.kilometers * 1000;
	  },
	  meters : function (val) {
		  this.kilometers = val / 1000;
		  this.meters = val;
	  }
  }
}
vm = Vue.createApp(app).mount('#app')
vm.$watch('kilometers', function (newValue, oldValue) {
    // 这个回调将在 vm.kilometers 改变后调用
    document.getElementById ("info1").innerHTML = "左边文本框中修改前的值为: " + oldValue + "，修改后值为: " + newValue;
})
vm.$watch('meters', function (newValue, oldValue) {
    // 这个回调将在 vm.meters 改变后调用
    document.getElementById ("info2").innerHTML = "右边文本框中修改前的值为: " + oldValue + "，修改后值为: " + newValue;
})

const app2 = {
  data() {
    return {
      rate : 7.25, // 汇率：1 * dollar = rate * rmb 
      dollar : 0,
      rmb : 0
    }
  },
  watch : {
	  dollar:function(val) {
		  this.dollar = val;
      this.rmb = this.dollar * this.rate;
		  // this.rmb = Math.round(this.dollar * this.rate * 1000)/1000;
	  },
	  rmb : function (val) {
		  this.dollar = val / this.rate;
		  this.rmb = val;
	  }
  }
}

rate = 7.25 // 汇率：1 * dollar = rate * rmb 
document.getElementById ("printrate").innerHTML = "1 美元 = " + rate + " 人民币（2022.10.21）";

vm2 = Vue.createApp(app2).mount('#app2')
vm2.$watch('dollar', function (newValue, oldValue) {
    document.getElementById ("info3").innerHTML = "左边文本框中修改前的值为: " + oldValue + "，修改后值为: " + newValue;
})
vm2.$watch('rmb', function (newValue, oldValue) {
    document.getElementById ("info4").innerHTML = "右边文本框中修改前的值为: " + oldValue + "，修改后值为: " + newValue;
})

// bug记录: 人民币从100输入到1000时，会变成1000.0000000000001
// bug原因：经过运算，损失了精度

// 解决方案:
// 不去改动人为操作的这个文本框，只更新另一侧的文本框

// Q:怎么在代码中实现？
// (暂时不会。。)