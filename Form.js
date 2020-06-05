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
        this.levels = createElement('h1');
        this.levels2 = createElement('h2');
        this.levels3 = createElement('h2');
        this.levels_1 = createElement('h4');
        this.levels_2 = createElement('h4');
        this.levels_3 = createElement('h4');
        this.levels_4 = createElement('h4');
        this.greeting = createElement('h2');
        this.repote = createElement('h2');
        this.level1 = createButton('1');
        this.level1.hide();
        this.level2 = createButton('2');
        this.level2.hide();
        this.level3 = createButton('3');
        this.level3.hide();
        this.level4 = createButton('4');
        this.level4.hide();

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
        this.title.style('color', '#F8F800');
        this.title.style('font-size', '80px');
        this.aboutGame.position(displayWidth / 2 - 335, displayHeight / 2 - 150);
        this.aboutGame.style('color', 'orange');
        this.aboutGame.style('font-size', '35px');
        this.userName.position(displayWidth / 2 - 55, displayHeight / 2 - 200);
        this.playButton.size(100, 40);
        this.playButton.position(displayWidth / 2, displayHeight / 2);
        this.playButton.mousePressed(() => {
            bg = 1;
            //soundtest = 0;
            mainSound.play();
            this.title.hide();
            this.userName.hide();
            this.playButton.hide();
            this.aboutGame.hide();
            player1.name = this.userName.value();
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
                                this.levels.style('color', '#FFFFFF');
                                this.levels.style('font-size', '35px');
                                this.levels.html("LEVELS");
                                this.levels.position(displayWidth / 2 - 50, 0);
                                this.levels2.style('color', '#FFFFFF');
                                this.levels2.html("WIN ALL FOUR LEVEL TO UNLOCK OTHER LEVEL");
                                this.levels2.position(displayWidth / 2 - 250, displayHeight / 2 - 100);
                                this.levels3.style('color', '#FFFFFF');
                                this.levels3.html("INSTRUCTIONS ABOUT ALL LEVELS");
                                this.levels3.position(displayWidth / 2 - 50, displayHeight / 2 - 50);
                                this.levels_1.style('color', '#FFFFFF');
                                this.levels_1.html("LEVEL 1 : MONKEY GOT A BOAT BUT CROCODILES ARE WAITING TO EAT MONKEY . SO , HELP MONKEY BY DRIVING BOAT .");
                                this.levels_1.position(10, displayHeight / 2);
                                this.levels_2.style('color', '#FFFFFF');
                                this.levels_2.html("LEVEL 2 : MONKEY GOT A GUN . HELP MONKEY BY SHOOTING THE CROCODILES . PRESS SPACE TO SHOOT .");
                                this.levels_2.position(10, displayHeight / 2 + 50);
                                this.levels_3.style('color', '#FFFFFF');
                                this.levels_3.html("LEVEL 3 : NOW MONKEY'S ENERGY DRAINED OUT . HELP MONKEY BY EATING YELLOW BANANA .");
                                this.levels_3.position(10, displayHeight / 2 + 100);
                                this.levels_4.style('color', '#FFFFFF');
                                this.levels_4.html("LEVEL 4 : CROCODILE : '' PLAY AND WIN 50 MATCHES WITH ME THEN I WILL LET YOU GO '' .HELP MONKEY BY PLAYING WITH KING OF CROCODILES .");
                                this.levels_4.position(10, displayHeight / 2 + 150);
                                this.greeting.style('color', '#FFFFFF');
                                this.greeting.html("I HOPE " + player1 + " ENJOYED THE GAME !!!");
                                this.greeting.position(displayWidth / 2 - 200, displayHeight - 150);
                                this.repote.style('color', '#FFFFFF');
                                this.repote.html(player1 + " IF ANY PROBLEM PLEASE REPORT TO inbogamestudio@gmail.com");
                                this.repote.position(displayWidth / 2 - 300, displayHeight -100);
                                console.log(player1);
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


                                this.level1.mousePressed(() => {
                                    this.level1.hide();
                                    this.level2.hide();
                                    this.level3.hide();
                                    this.level4.hide();
                                    this.levels2.hide();
                                    this.levels3.hide();
                                    this.levels_1.hide();
                                    this.levels_2.hide();
                                    this.levels_3.hide();
                                    this.levels_4.hide();
                                    this.levels.hide();
                                    this.greeting.hide();
                                    this.repote.hide();
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
            this.levels2.hide();
            this.levels3.hide();
            this.levels.hide();
            this.levels_1.hide();
            this.levels_2.hide();
            this.levels_3.hide();
            this.levels_4.hide();
            this.greeting.hide();
            this.repote.hide();
            mainSound.play();

        });


        this.level3.mousePressed(() => {
            lev = 3;

            this.level1.hide();
            this.level2.hide();
            this.level3.hide();
            this.level4.hide();
            this.levels.hide();
            this.levels2.hide();
            this.levels3.hide();
            this.levels_1.hide();
            this.levels_2.hide();
            this.levels_3.hide();
            this.levels_4.hide();
            this.greeting.hide();
            this.repote.hide();
            mainSound.play();


        });

        this.level4.mousePressed(() => {
            lev = 4;

            this.level1.hide();
            this.level2.hide();
            this.level3.hide();
            this.level4.hide();
            this.levels.hide();
            this.levels2.hide();
            this.levels3.hide();
            this.levels_1.hide();
            this.levels_2.hide();
            this.levels_3.hide();
            this.levels_4.hide();
            this.greeting.hide();
            this.repote.hide();
            mainSound.play();
        });



        if (ok === 3) {
            this.level1.show();
            this.level2.show();
            this.level3.show();
            this.level4.show();
            this.levels2.show();
            this.levels3.show();
            this.levels.show();
            this.levels_1.show();
            this.levels_2.show();
            this.levels_3.show();
            this.levels_4.show();
            this.greeting.show();
            this.repote.show();
            lev = 1.1;

        }

        if (lev === 1.1) {
            ok = 0;
            lev = 0;

        }





    }





}

