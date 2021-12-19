function Pizza(radius, base){
  this.radius = radius;
  this.base = base;
  this.color = color;
}

Pizza.prototype = {
  show: function(){
    circle(wcx,wcy,this.radius);
  }
}
