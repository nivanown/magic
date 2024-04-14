function Timer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
Timer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  var timer='';
  var today=new Date();
  var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var me=this;

  if( ( this.tl - today ) > 0 ){
   timer += '<div class="number-wrapper"><span class="number day">'+day+'</span><span class="caption">Дней</span></div>';
   timer += '<div class="number-wrapper"><span class="number hour">'+hour+'</span><span class="caption">Часов</span></div>';
   timer += '<div class="number-wrapper"><span class="number min">'+this.addZero(min)+'</span><span class="caption">Минут</span></div><div class="number-wrapper"><span class="number sec">'+this.addZero(sec)+'</span><span class="caption">Секунд</span></div>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function tmr(){

 // Set countdown limit
 var tl = new Date('2024/10/29 20:00:00');

 // You can add time's up message here
 var timer = new Timer('tmr',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
 timer.countDown();
}
window.onload=function(){
 tmr();
}