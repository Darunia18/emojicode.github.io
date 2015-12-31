// Generated by CoffeeScript 1.9.2
var EmojiExample;

EmojiExample = (function() {
  EmojiExample.prototype.list = [
    {
      img: "1f36b",
      html: "The chocolate bar increments a value. In any other language you would write <code>i++</code>. How boring!"
    }, {
      img: "1f36e",
      html: "Manage variables with ease: Automatic declarations and no crude syntax to access instance variables!"
    }, {
      img: "1f4e6",
      html: "And this loads a package. Very intuitive, isn’t it? (There’s an impressive package system.)"
    }, {
      img: "1f37a",
      html: "A powerful concept to avoid mistakes: Optionals!"
    }, {
      img: "1f407",
      html: "You like cute little rabbits and powerful fast classes. Any questions?"
    }, {
      img: "2712",
      html: "Overriding is fun and secure. Me more specific or more general, just do not break promises."
    }
  ];

  EmojiExample.prototype.i = 0;

  function EmojiExample() {
    this.heContainer = document.getElementById("he-container");
    this.heImg = document.getElementById("he-img-container");
    this.heText = document.getElementById("he-text");
    this.next();
    this.interval = setInterval((function(_this) {
      return function() {
        return _this.next();
      };
    })(this), 4600);
  }

  EmojiExample.prototype.next = function() {
    if (this.i === this.list.length) {
      this.i = 0;
    }
    this.heContainer.classList.add("out");
    setTimeout((function(_this) {
      return function() {
        var xhr;
        xhr = new XMLHttpRequest;
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            return _this.heImg.innerHTML = "" + xhr.responseText;
          }
        };
        xhr.open('GET', "img/" + _this.list[_this.i].img + ".svg", true);
        return xhr.send(null);
      };
    })(this), 410);
    return setTimeout((function(_this) {
      return function() {
        _this.heText.innerHTML = _this.list[_this.i].html;
        _this.heContainer.classList.remove("out");
        return _this.i++;
      };
    })(this), 860);
  };

  return EmojiExample;

})();

setTimeout(function() {
  return new EmojiExample;
}, 100);
