class Form {
    constructor() {
        this.title = createElement('h1');
        this.title.html("SAVE THE MONKEY");
        this.userName = createInput("NAME");
        this.playButton = createButton('WATCH STORY');
        this.aboutGame = createElement('h3');
        this.aboutGame.html("WATCH STORY TO KNOW ABOUT THE GAME");
        this.next1 = createButton('NEXT');
        this.next1.size(100, 40);
        this.next2 = createButton('NEXT');
        this.next2.size(100, 40);
        this.next3 = createButton('NEXT');
        this.next3.size(100, 40);
        this.next4 = createButton('NEXT');
        this.next4.size(100, 40);
        this.next1.hide();
        this.next2.hide();
        this.next3.hide();
        this.next4.hide();
        this.levels = createElement('h1')
        this.level1 = createButton('1')
        this.level1.hide();
        this.level2 = createButton('2')
        this.level2.hide();
        this.level3 = createButton('3')
        this.level3.hide();
        this.level4 = createButton('4')
        this.level4.hide();
        this.level5 = createButton('5')
        this.level5.hide();
        this.playb = createButton('PLAY');
        this.playb.hide();
        this.s1 = loadImage("image/S1.png");
        this.s2 = loadImage("image/S2.png");
        this.s3 = loadImage("image/S3.png");
        this.s4 = loadImage("image/S4.png");
        this.s5 = loadImage("image/S5.png");
        this.l1i = loadImage("image/L1.1.png");
        
        
    }

    display() {
           
            this.title.position(displayWidth / 2 - 350, 0);
            this.title.style( 'color', '#F8F800');
            this.title.style('font-size', '80px');
            this.aboutGame.position(displayWidth / 2 - 335, displayHeight / 2 - 150);
            this.aboutGame.style( 'color', 'orange');
            this.aboutGame.style('font-size', '35px');
            this.userName.position(displayWidth / 2 - 55, displayHeight / 2 - 200);
            this.playButton.size(100, 40);
            this.playButton.position(displayWidth / 2, displayHeight / 2);
            this.playButton.mousePressed(() => {
                bg = 1;
                console.log(soundtest);
                //soundtest = 0;
                console.log(soundtest);
                mainSound.play();
                this.title.hide();
                this.userName.hide();
                this.playButton.hide();
                this.aboutGame.hide();
                player.name = this.userName.value();
                image(this.s1, 0, 0, displayWidth, displayHeight);
                this.next1.show();
                this.next1.position(displayWidth - 150, displayHeight - 50);
                //intoSound.play();
                this.next1.mousePressed(() => {
                    image(this.s2, 0, 0, displayWidth, displayHeight);
                    this.next1.hide();
                    this.next2.show();
                    this.next2.position(displayWidth - 150, displayHeight - 50);
                    this.next2.mousePressed(() => {
                        image(this.s3, 0, 0, displayWidth, displayHeight);
                        this.next2.hide();
                        this.next3.show();
                        this.next3.position(displayWidth - 150, displayHeight - 50);
                        this.next3.mousePressed(() => {
                            image(this.s4, 0, 0, displayWidth, displayHeight);
                            this.next3.hide();
                            this.next4.show();
                            this.next4.position(displayWidth - 150, displayHeight - 50);
                            this.next4.mousePressed(() => {
                                image(this.s5, 0, 0, displayWidth, displayHeight);
                                this.next4.hide();
                                this.playb.show();
                                this.playb.size(100, 40);
                                this.playb.position(displayWidth / 2, displayHeight - 150);
                                this.playb.mousePressed(() => {
                                    this.playb.hide();
                                    clear();
                                    //soundtest = 1;
                                    mainSound.stop();
                                    bg = 2;
                                    this.levels.style( 'color', '#FFFFFF');
                                    this.levels.style('font-size', '35px');
                                    this.levels.html("LEVELS");
                                    this.levels.position(displayWidth / 2 - 50, 0);
                                    this.level1.show();
                                    this.level1.size(100, 100);
                                    this.level1.position(10, 100);
                                    this.level2.show();
                                    this.level2.size(100, 100);
                                    this.level2.position(150, 100);
                                    this.level3.show();
                                    this.level3.size(100, 100);
                                    this.level3.position(290, 100);
                                    this.level4.show();
                                    this.level4.size(100, 100);
                                    this.level4.position(430, 100);
                                    this.level5.show();
                                    this.level5.size(100, 100);
                                    this.level5.position(570, 100);
                                    this.level1.mousePressed(() => {
                                        this.level1.hide();
                                        this.level2.hide();
                                        this.level3.hide();
                                        this.level4.hide();
                                        this.level5.hide();
                                        this.levels.hide();
                                        mainSound.play();
                                        lev = 1;
                                        

                                    });

                                });

                            });

                        });
                    });


                });



            });
       

        this.level2.mousePressed(() => {
            lev = 2;
            
                this.level1.hide();
                this.level2.hide();
                this.level3.hide();
                this.level4.hide();
                this.level5.hide();
                this.levels.hide();

            
        });


        this.level3.mousePressed(() => {
            lev = 3;
            
                this.level1.hide();
                this.level2.hide();
                this.level3.hide();
                this.level4.hide();
                this.level5.hide();
                this.levels.hide();

            
        });

        this.level4.mousePressed(() => {
            lev = 4;
            
                this.level1.hide();
                this.level2.hide();
                this.level3.hide();
                this.level4.hide();
                this.level5.hide();
                this.levels.hide();

            
        });

        this.level5.mousePressed(() => {
            lev = 5;
            
                this.level1.hide();
                this.level2.hide();
                this.level3.hide();
                this.level4.hide();
                this.level5.hide();
                this.levels.hide();

            
        });


    }





}

