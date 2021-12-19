// contents = require('./contnet/mappings.json')
contents = fetch('./content/mappings.json').then(response => response.json());

function Pizza(radius, base, customization){
  this.radius = radius;
  this.color = color;
  this.customization = customization;
  this.image_preload = false;
}

Pizza.prototype = {
  show: function(){
    if (this.image_preloaded) {
      circle(wcx,wcy,this.radius);
    }
  },
  gather_ingredients: function(key){
    let custom_value = this.customization[key];
    let data = contents[custom_value];
    return data
  },
  load_assets: function(){
    let base = gather_ingredients(base);
    let cheese = gather_ingredients(cheese);
    let topping = gather_ingredients(topping);
    let sauce = gather_ingredients(sauce);
    loadImage(base, img => {
      this.base = img;
      loadImage(cheese, img => {
        this.cheese = img;
        loadImage(topping, img => {
          this.topping = img;
          parent.image_loaded = true;
        });
      });
    });
  },
}
