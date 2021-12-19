function Pizza(radius, base, customization){
  this.radius = radius;
  this.base = base;
  this.color = color;
  this.customization = customization;
}

Pizza.prototype = {
  show: function(){
    circle(wcx,wcy,this.radius);
  }
}
