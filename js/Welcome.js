class Welcome {
  constructor() {
    this.logoImage =
      "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/logo.png";
    this.logo = createImg(this.logoImage);

    this.player1Button = createButton("player1");
    this.player2Button = createButton("player2");
  }

  hideElements() {
    this.player1Button.hide();
    this.player2Button.hide();
  }

  setElementPosition() {
    this.logo.position(width / 3.2, 10);
    this.player1Button.position(width / 2.3, height / 2 - 100);
    this.player2Button.position(width / 2.3, height / 2);
  }

  setElementStyle() {
    this.player1Button.class("customButton");
    this.player2Button.class("customButton");
  }

  handleOnpress() {
    this.player1Button.mousePressed(() => {
      this.hideElements();
      player1.display();
    });

    this.player2Button.mousePressed(() => {
      this.hideElements();
      player2.display();
    });
  }

  display() {
    this.setElementStyle();
    this.setElementPosition();
    this.handleOnpress();
  }
}
