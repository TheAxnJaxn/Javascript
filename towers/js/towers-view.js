(function() {
  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }

  var View = Hanoi.View = function(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
    this.bindEvents();
    this.moves = [];
  };

  View.prototype.setupTowers = function() {
    for (var i = 0; i < 3; i++) {
      var $tower = $("<div>").addClass("tower").attr("tower-num", i);

      for (var j = 1; j < 4; j++) {
        var $disc = $("<div>")
          .addClass("disc")
          .attr("size", j)
          .attr("show", "0");

        $tower.append($disc);
      }

      this.$el.append($tower);
    }
  };

  View.prototype.render = function() {
    var $towers = this.$el.find(".tower");
    $towers.find(".disc").attr("show", "0");
    $towers.find(".disc").attr("order","");

    for (var i = 0; i < this.game.towers.length; i++) {
      for (var j = 0; j < this.game.towers[i].length; j++) {
        // tower = this.game.towers[i];
        // disc = tower[j];
        // disc is number

        $($towers[i]).find("div[size='" + this.game.towers[i][j] + "']")
          .attr("show", "1")
          .attr("order", j);
      }
    }
  };

  View.prototype.clickTower = function($tower) {
    // get tower # and add it to moves
    this.moves.push(parseInt($tower.attr("tower-num")));

    if (this.moves.length === 2){
      if(this.game.move(this.moves[0], this.moves[1])) {
        //check if won?
        this.render();
        if(this.game.isWon()) {
          this.$el.parent().find("h2").text("Congrats, you've won!");
        }
      } else {
        alert("Invalid move!");
      }
      this.moves = [];
    }
  };

  View.prototype.bindEvents = function() {
    this.$el.find(".tower").on("click", function() {
      this.clickTower($(event.currentTarget));
    }.bind(this));
  };

})();
