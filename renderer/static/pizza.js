contents = require('./contnet/mappings.json')


function Pizza(radius, base, customization){
  this.radius = radius;
  this.base = base;
  this.color = color;
  this.customization = customization;
}

Pizza.prototype = {
  show: function(){
    circle(wcx,wcy,this.radius);
  },
  gather_ingredients: function(key){
    custom_value = this.customization[key]
    data = contents[custom_value]
    return data
  },
  load_assets: function(){
    base = gather_ingredients(base)
    cheese = gather_ingredients(cheese)
    topping = gather_ingredients(topping)
    sauce = gather_ingredients(sauce)
    
  },
  load_image: function(location){
   loadImage(location, img => {
    image(img, 0, 0);
  });
  }
}
