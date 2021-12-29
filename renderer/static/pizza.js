// contents = require('./contnet/mappings.json')
// image_mappings = fetch('./content/mappings.json').then(response => response.json());

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
  gather_ingredients: async function(key){
    let custom_value = this.customization[key];
    let data = image_mappings[custom_value];
    return data
  },
  load_assets: function(){
    img = loadImage('/Users/ramprakash/Downloads/000-random.png');
    image(img, 0, 0)
//    let base = this.gather_ingredients("base");
//    let cheese = this.gather_ingredients("cheese");
//    let toppjng = this.gather_ingredients("topping");
//    let sauce = this.gather_ingredients("sauce");
//    loadImage(base, img => {
//      this.base = img;
//      loadImage(cheese, img => {
//        this.cheese = img;
//        loadImage(topping, img => {
//          this.topping = img;
//          parent.image_loaded = true;
//        });
//      });
//    });
  },
}
