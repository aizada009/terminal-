<template>
    <div id="cart">
            <div class="order">
         <hr>   
            <p>Мой заказ</p>
            <div class="selected" > 
            <button class="btn-delete" >x</button>
           <img class="image" >
            </div>
            
            <p>Итого:  </p>
            <button class="btn">Готово</button>
            <button style="background-color:green" class="btn">Отмена</button>
      </div>
    </div>
</template>

<script>
//ПОКА НИЧЕГО НЕ ДЕЛАЕТ 
export default {
        name: 'cart'
}
</script>

<style>
#cart{
        width: 600px;
        background-color: white;
        margin: 0 auto;

}
.order{
  height: 300px;
  width: 300px;
  background-color: white;
  margin-top: 0;
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
/* стиль для видео
.add{
        height: 280px;
        text-align: center;
        padding-top: 120px;
}
.add p{
        padding: 0;
        margin-bottom: 8px;
        text-transform: uppercase;
        color: red;
        font-weight: 700px;
        text-align: center;
        
}
#bgvideo{
        right: 0;
        bottom: 0;
        height: 250px;
        width: 650px;
}*/

</style>
