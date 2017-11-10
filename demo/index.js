<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Fontjs</title>
  <script href="./font.js"></script>
</head>
<body>
  <center>
    <h1 id="header">Fontjs</h1>
    <iframe src="https://ghbtns.com/github-btn.html?user=ilovecode1&repo=fontjs&type=watch&count=true&size=large" frameborder="0" scrolling="0" width="120" height="30px"></iframe><iframe src="https://ghbtns.com/github-btn.html?user=ilovecode1&repo=fontjs&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="130" height="30px"></iframe>
    <p id="description">The super simple and super fast javascript library for fonts with 0 dependencies. Try below by changing the font size or changing the text.<br><br><a href="https://github.com/ilovecode1/fontjs/releases">Download on Github</a></p>
  </center>
  
  <p id="demotext" contenteditable="true">
  Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan feugiat, vitae nisl porttitor a et augue nam proin bibendum, vehicula dictumst ligula cum rutrum rhoncus curabitur commodo. Dictum lacus curae blandit risus praesent ac facilisis mollis fermentum, condimentum imperdiet suscipit at sem pharetra cras libero, pretium in bibendum lacinia mus ridiculus eros tellus. Cum placerat volutpat curabitur nostra cras odio ultrices porttitor fringilla mattis per dictum ante platea urna, pellentesque dis himenaeos nullam tempus magna malesuada gravida sociis dui ad facilisi scelerisque aliquet. Porttitor phasellus suspendisse dignissim dis penatibus mus quis fermentum, ornare at pulvinar felis sed nam sociosqu non, facilisi luctus taciti laoreet tincidunt mollis condimentum. Fames lectus pretium hendrerit curae iaculis at tempor feugiat, tellus gravida luctus imperdiet volutpat malesuada ad vulputate etiam, eros integer ultricies molestie fusce vehicula habitant. Leo lacinia erat proin mattis rutrum malesuada eleifend iaculis laoreet, parturient orci taciti vulputate posuere montes penatibus massa, dictum lobortis pretium eros urna dictumst fames conubia. Ultrices accumsan faucibus habitant sodales mauris nec hendrerit, imperdiet parturient pretium et cras magnis pellentesque maecenas, cubilia pulvinar proin pharetra eleifend odio.<br><br>
  Convallis potenti vel interdum facilisi ultrices sollicitudin hendrerit eleifend sociis, nascetur rutrum venenatis porttitor odio egestas velit auctor consequat dapibus, ante fusce turpis justo aliquet luctus aliquam cras. Turpis mauris dictum mollis fermentum nisi nulla rutrum et ligula, nec ante commodo scelerisque gravida pellentesque morbi augue suscipit, sollicitudin lacinia natoque pretium donec taciti erat elementum. Tristique magnis phasellus litora integer pretium urna, tellus neque suspendisse nisi mauris sociosqu faucibus, nam ornare maecenas cubilia quis. Mauris justo in dapibus laoreet aenean interdum, suscipit praesent nam donec est ridiculus, sagittis ante tortor velit ornare. Ante id iaculis netus platea nunc quam sodales magnis, ullamcorper blandit venenatis feugiat nibh dis vivamus, suscipit habitant lacus dictumst imperdiet aliquet fringilla.
  </p>
  <input type="range" id="size" value="10" style="width:100%" min=0 max=100 />
  
  <script>
    var aaargh = Font("aaargh");
    var size = document.getElementById("size");

    window.onload = function() {
      aaargh
        .setURL("http://getcors.com/https://drive.google.com/uc?export=download&id=13d_hq43ld1bEfc5AGMDz51O8jsv7rfcE")
        .load("#demotext");

      aaargh
        .setSize("14px")
        .load("#description");

      aaargh
        .setSize("30px")
        .setWeight("bold")
        .load("#header");

      size.onchange = function(){
          aaargh
            .setSize(document.getElementById("size").value + "px")
            .load("#demotext");
      }

      size.focus();
      size.select();
    }
  </script>
</body>
</html>
