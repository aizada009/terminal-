<template>
  <div class="terminal">
    <!--должен меняться  -->
          <h1>Сэндвичи</h1>
          <div  class="product" v-for="(bt, i) in burgertypes">
            <div>
              <img  class="image" v-bind:src="bt.image">
              <h4>{{ bt.title }}</h4>
              <h6>$ {{ bt.price }}</h6>
              <span>x</span>
              <button class="btn-add" @click="showimage(bt)">ADD</button>
              <button class="btn">+</button>
              <button class="btn">-</button>
              
            </div>
          </div>
        
    <!-- <div class="order">
         <hr>   
            <p>Мой заказ</p>
            <div class="selected" v-for="(s,i) in selected"> 
            <button class="btn-delete" @click="remove(s)">x</button>
           <img class="image" v-bind:src="s">
            </div>
            <p>Итого: {{ prices }} </p>
            <button class="btn">Готово</button>
            <button style="background-color:green" class="btn">Отмена</button>
      </div>
      -->
  </div>
</template>

<script> 

export default {
  name: 'terminal',
  props: ['burgertypes'],
  data() {
    return{
    selected: [],
    burger: []
    }
  },
 
  computed: { //почему не метод? потому что надо запускать его всегда при каждом обращении  
      prices(){
      let sum=0;
      this.burger.forEach((bt) => {
         sum+= bt.price;
      });
      return sum;
    }
  }, 
  methods: {
    showimage(bt){
      this.burger.push(bt);
      console.log(bt.image);
      this.selected.push(bt.image);
    },
      remove(s){
        this.selected.splice(s, 1);
        this.burger.splice(s,1);

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image{
  width: 90px;
  height: 70px;
}
.product{
  width: 90px;
  height: 70px;
  float:left; 
  margin: 0 15px 15px 0; 
  text-align:center;
  padding: 10px;
}
.selected {
  float: left;
  max-width: 600px;
  max-height: 70px;
}
/* стили для меню навигации */
.menu{
  list-style: none;
  margin: 0 auto;   
}
.nav {
  display: block;
  width: 600px;
  margin: 0 auto 30px;
}
.body {
  margin: 0 auto;
  width: 600px;
}
.nav ul{
  padding: 1em 0;
}
.menu li{ 
  display: inline; 
  }
.menu li a{
  text-decoration: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  transition: .2s linear;
  padding: 1em;
  background: rgba(54, 54, 54, 0.842);
  border-right: 1px solid #202020;
  color: black;
}
.menu a:hover { 
  background: #df1a13; 
  }
/* конец*/

.terminal {
  background-color: white;
  width: 600px;
  }
.order{
  height: 280px;
  width: 600px;
  background-color: white;
  margin-top: 120px;
  float: left;
}
.btn {
  height: 50px;
  text-align: center;
  font-size: 17px;
  background-color:#df1a13;
  color: black;
  border-radius: 8px;
}
.btn-delete, .btn-add{
  height: 30px;
  border-radius: 8px;
  font-size: 20px;

}

</style>
