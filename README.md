Font.js allows you to load and change fonts with javascript.

# Example
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Filovecode1%2Ffontjs.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Filovecode1%2Ffontjs?ref=badge_shield)


This is an example on how to load the example font aargh with font.js to a paragraph tag.

```html
<p>Hello World!</p>
```

```javascript
var aaargh = Font("aaargh"); // Create a new font name aaargh then set it to a varable
aargh
  .setURL("https://getcors.com/https://drive.google.com/uc?export=download&id=13d_hq43ld1bEfc5AGMDz51O8jsv7rfcE") // Set Font URL
  .setSize("14px") // Set the size to 14px
  .setWeight("bold") // Set to a bold font
  .load("p"); // Load to paragraph tag
```

# Documentation

### Font(name)

Allows you to create a new font with a unique name allowing you to change it at any point.

### setURL(url)

Sets the URL or directory of the font you are loading.

### setStyle(style)

Can be set to any of these values normal, italic, oblique, initial or inherit.

### setSize(size)

Sets font size can be any of the normal CSS property values inxluding pixels or percentage.

### setWeight(weight)

Sets the font weight including normal, bold or weight value. Again any of the normal CSS property values.

### setVariant(variant)

Can be set to any of these values normal, small-caps, initial or inherit.

### setStrech(strech)

Sets the strech of the font can be any of the normal CSS propery values.

### load(query)

Loads the current settings to the query elements (the variable query uses querySelectorAll so you use it just like jQuery). Anytime you want to show the changed settings you need to run this command.

# Demo

[Click here for demo.](https://ilovecode1.github.io/fontjs)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Filovecode1%2Ffontjs.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Filovecode1%2Ffontjs?ref=badge_large)