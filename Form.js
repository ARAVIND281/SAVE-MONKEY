class Form {
    constructor() {
        this.title = createElement('h1');
        this.title.html("SAVE THE MONKEY");
        this.greeting = createElement('h2');
        this.userName = createInput("NAME");
        this.playButton = createButton('watch video');
    }

    display() {
        this.title.position(displayWidth / 2 - 60, 0);
        this.userName.position(displayWidth / 2 - 60, displayHeight / 2 - 80);
        this.playButton.position(displayWidth / 2 - 50, displayHeight / 2);
        this.playButton.mousePressed(()=>{
            this.title.hide();
            this.userName.hide();
            this.playButton.hide();
            player.name = this.userName.value();
            this.greeting.html("hello " + player.name);
            this.greeting.position(displayWidth / 2 - 50, displayHeight / 2);
            
        }); 

    }

}