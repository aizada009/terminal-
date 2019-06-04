<template>
  <div id="app">
    <div class="nav">
        <ul class="menu"> <!--меню  -->
        <li><router-link to="./terminal">Сэндвичи</router-link></li>
        <li><router-link to="./fries">Картофель</router-link></li>
        <li><a>Десерты</a></li>
        <li><a>Напитки</a></li>
        <li><a>Соусы</a></li>
        </ul>
    </div>
    <div :bt="burgertypes" class="terminal">
              
    </div>
    <div class="cart">
              <cart class="cart"></cart> 
    </div> 
         <!--ссылка на видео -->
        <router-view></router-view>
        
  </div>
</template>

<script>
import terminal from './components/terminal.vue'
import cart from './components/cart.vue' 
import fries from './components/fries.vue'

export default {
  name: 'App',
  components: {terminal,cart, fries},

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  padding: 1em;
  background-color: white;
  
}
/* стиль для кнопки но она пока  не нужна кек пусть стоит
.btn {
  height: 52px;
  text-align: center;
  font-size: 17px;
  background-color:#df1a13;
  color: black;
  border-radius: 8px;
  margin: 2px 7px auto 0;
  padding: 12px;
  float: right;
} */
.menu{
  list-style: none;
  margin: 0 auto;   
}
.nav {
  display: block;
  width: 600px;
  margin: 0 ;
  
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
.cart{
  float: right;
  width: 20%;
  
}
.terminal{
  float: left;
  width: 80%;
}
</style>
