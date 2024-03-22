function Element() {
  var gameUI = GameUI.getInstance();

  var element = new Image();
  element.src = 'images/elements.png';

  this.type;
  this.sX;
  this.sY = 0;
  this.x;
  this.y;
  this.width = 32;
  this.height = 32;

  var that = this;

  this.platform = function() {
    that.type = 1;
    that.sX = 0;
  };

  this.coinBox = function() {
    that.type = 2;
    that.sX = 1 * that.width;
  };

  this.powerUpBox = function() {
    that.type = 3;
    that.sX = 2 * that.width;
  };

  this.uselessBox = function() {
    that.type = 4;
    that.sX = 3 * that.width;
  };

  this.flagPole = function() {
    that.type = 5;
    that.sX = 4 * that.width;
  };

  this.flag = function() {
    that.type = 6;
    that.sX = 5 * that.width;
  };

  this.pipeLeft = function() {
    that.type = 7;
    that.sX = 6 * that.width;
  };

  this.pipeRight = function() {
    that.type = 8;
    that.sX = 7 * that.width;
  };

  this.pipeTopLeft = function() {
    that.type = 9;
    that.sX = 8 * that.width;
  };

  this.pipeTopRight = function() {
    that.type = 10;
    that.sX = 9 * that.width;
  };

  this.water = function() {
    that.type = 11;
    that.sX = 11 * that.width;
  };

  this.marshplat = function() {
    that.type = 12;
    that.sX = 12 * that.width;
  };

  this.marshgrass = function() {
    that.type = 13;
    that.sX = 13 * that.width;
  };

  this.poop = function() {
    that.type = 14;
    that.sX = 14 * that.width;
  };

  this.boneleft = function() {
    that.type = 15;
    that.sX = 15 * that.width;
  };

  this.boneright = function() {
    that.type = 16;
    that.sX = 16 * that.width;
  };

  this.draw = function() {
    gameUI.draw(element, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height);
  };
}