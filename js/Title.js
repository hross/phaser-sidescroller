var SideScroller = SideScroller || {};

SideScroller.Title = function(){};

//setting game configuration and loading the assets for the loading screen
SideScroller.Title.prototype = {
  init: function(score) {
    if (score) {
      alert(score);
    }
  },
  shutdown: function() {
    if (this.backGroundMusic) {
      this.backGroundMusic.stop();
    }
  },
  preload: function() {
    //assets we'll use in the title screen
    //this.load.image('preloadbar', 'assets/images/preloader-bar.png');
    //this.player = this.game.add.sprite(100, 300, 'startButton');
  },
  create: function() {
    this.backGroundMusic = this.game.add.audio('titleMusic');
    this.backGroundMusic.play();
        
    //loading screen will have a white background
    this.game.stage.backgroundColor = '#ffffff';
    
    this.game.world.resize(this.game.width, this.game.height);
    this.game.camera.reset();
    //var playButton = this.game.add.button(160,320,"start",this.playTheGame,this);
    this.playButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY+60, 'startButton', this.playTheGame, this);
    //this.playButton.anchor.setTo(0.5,0.5);
    
    
    this.text = this.game.add.text(this.game.world.centerX, this.game.world.centerY-20,
    "Welcome to Laura's World!\nCollect Rhys heads without touching Winstons and get to the end!\nPress Up/Down Arrow to control!");
    this.text.anchor.setTo(0.5);
    //text.font = 'Revalia';
    this.text.fontSize = 16;
    
  },
  playTheGame: function(){
    this.text.destroy();
    this.playButton.destroy();
    this.game.state.start('Game');
  }
};