class Form {
    constructor() {
        this.title = createElement('h1');
        this.title.html("SAVE THE MONKEY");
        this.userName = createInput("NAME");
        this.playButton = createButton('watch STORY');
        this.aboutGame = createElement('h3');
        this.aboutGame.html("WATCH STORY TO KNOW ABOUT THE GAME");
        this.next1 = createButton('NEXT');
        this.next2 = createButton('NEXT');
        this.next3 = createButton('NEXT');
        this.next4 = createButton('NEXT');
        this.next1.hide();
        this.next2.hide();
        this.next3.hide();
        this.next4.hide();
        this.levels = createElement('h1')
        this.level1 = createButton('1')
        this.level1.hide();
        this.playb = createButton('PLAY');
        this.playb.hide();
        this.s1 = loadImage("image/S1.png");
        this.s2 = loadImage("image/S2.png");
        this.s3 = loadImage("image/S3.png");
        this.s4 = loadImage("image/S4.png");
        this.s5 = loadImage("image/S5.png");
    }

    display() {
        this.title.position(displayWidth / 2 - 110, 0);
        this.aboutGame.position(displayWidth / 2 - 150, displayHeight / 2 - 150);
        this.userName.position(displayWidth / 2 - 55, displayHeight / 2 - 200);
        this.playButton.position(displayWidth / 2, displayHeight / 2);
        this.playButton.mousePressed(() => {
            this.title.hide();
            this.userName.hide();
            this.playButton.hide();
            this.aboutGame.hide();
            player.name = this.userName.value();
            image(this.s1, 0, 0, displayWidth, displayHeight);
            this.next1.show();
            this.next1.position(displayWidth - 100, displayHeight - 50);
            //intoSound.play();
            this.next1.mousePressed(() => {
                image(this.s2, 0, 0, displayWidth, displayHeight);
                this.next1.hide();
                this.next2.show();
                this.next2.position(displayWidth - 100, displayHeight - 50);
                this.next2.mousePressed(() => {
                    image(this.s3, 0, 0, displayWidth, displayHeight);
                    this.next2.hide();
                    this.next3.show();
                    this.next3.position(displayWidth - 100, displayHeight - 50);
                    this.next3.mousePressed(() => {
                        image(this.s4, 0, 0, displayWidth, displayHeight);
                        this.next3.hide();
                        this.next4.show();
                        this.next4.position(displayWidth - 100, displayHeight - 50);
                        this.next4.mousePressed(() => {
                            image(this.s5, 0, 0, displayWidth, displayHeight);
                            this.next4.hide();
                            this.playb.show();
                            this.playb.position(displayWidth / 2, displayHeight - 150);
                            this.playb.mousePressed(()=>{
                                this.playb.hide();
                                clear();
                                this.levels.html("LEVELS");
                                this.levels.position(displayWidth / 2 - 50, 0);
                                this.level1.show();
                                this.level1.size(75,75);
                                this.level1.position(10,100);
                                this.level1.mousePressed(()=>{
                                    this.level1.hide();
                                    this.levels.hide();
                                    lev = 1;
                                })

                            });

                        });

                    });
                });


            });



        });

    }

    

}

