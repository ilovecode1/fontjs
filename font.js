var font = function() {
  this.name = null;
  this.url = null;
  this.style = "normal";
  this.size = "14px";
  this.weight = "normal";
  this.variant = "normal";
  this.stretch = "normal";
  
  this.setName = function(input) {
    this.name = input;
    return this;
  }
  
  this.setURL = function(input) {
    this.url = input;
    return this;
  }
  
  this.setStyle = function(input) {
    this.style = input;
    return this;
  }
  
  this.setSize = function(input) {
    this.size = input;
    return this;
  }
  
  this.setWeight = function(input) {
    this.weight = input;
    return this;
  }
  
  this.setVariant = function(input) {
    this.variant = input;
    return this;
  }
  
  this.setStrech = function(input) {
    this.strech = input;
    return this;
  }
  
  this.load = function(selector) {
    if (!document.getElementById("fontjs-" + this.name)) {
      var head = document.getElementsByTagName('head').item(0);
      var style = document.createElement("style");
      style.setAttribute("type", "text/css");
      style.setAttribute("id", "fontjs-" + this.name);
      var content = "@font-face {font-family:"
      + this.name 
      + "; src:url(" 
      + this.url 
      + ");font-style:"
      + this.style
      + "font-weight:"
      + this.weight
      + "font-stretch:"
      + this.stretch
      + "}";
      
      if (style.styleSheet) {
        style.styleSheet.cssText = content;
      } else {
        style.appendChild(document.createTextNode(content));
        head.appendChild(style);
      }
    } else {
      document.getElementById("fontjs-" + this.name)
        .innerHTML = "@font-face {font-family:"
                     + this.name 
                     + "; src:url(" 
                     + this.url 
                     + ");font-style:"
                     + this.style
                     + "font-weight:"
                     + this.weight
                     + "font-stretch:"
                     + this.stretch
                     + "}";
    }
    
    var sel = document.querySelectorAll(selector);

      for (var i = sel.length - 1; i >= 0; i--) {
        sel[i].setAttribute("style", "font-family:"
                            + this.name
                            + ";font-size:"
                            + this.size
                            + ";");
      }
    return this;
  }
}

function Font(name) {
  return new font().setName(name);
}
