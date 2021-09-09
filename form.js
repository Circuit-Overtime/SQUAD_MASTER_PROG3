class Form
{
    constructor()
    {
        this.title = createElement('h1')
        this.input1 = createInput("Enter Your Name Here");
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
    }
    hide()
    {
        this.input1.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display()
    {

        this.title.html("SQUAD MASTER");
        this.title.position( displayWidth/2-450, displayHeight/2 - 450);
        this.title.style('color', 'Yellow');
        this.title.style('font-size', '7em');
        this.input1.position(displayWidth/2-200, displayHeight/2-100);
        this.input1.style('height', '60px');
        this.input1.style('width', '500px');
        this.input1.style('font-size', '2em');
        this.input1.style('box-shadow', '0 20px 40px #fff');
        this.input1.style('border', 'none');
        this.input1.style('outline', 'none')
        this.input1.style('color', 'white')
        this.input1.style('border-radius', '10px')
        this.input1.style('background', 'transparent')
        this.input1.style('border', '2px solid #fff')  
        this.input1.style('font-size', '20px')
        this.button.position(displayWidth/2-40, displayHeight/2 + 40);
        this.button.style('height', '50px');
        this.button.style('width', '100px');
        this.button.style('background', 'transparent')
        this.button.style('border', '4px solid cyan')
        this.button.style('color', 'cyan')
        this.button.style('font-size', '24px')
        this.button.style('border-radius', '15px')
        this.button.style('cursor', 'pointer')
        this.button.style('box-shadow', '0 10px 40px cyan');
        background(back_img); 


    
    this.button.mousePressed(()=>{
        this.input1.hide();
        this.button.hide();
        player.name = this.input1.value();
        playerCount += 1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);

        this.greeting.html('Welcome' + player.name);
        this.greeting.position(displayWidth/2-250, displayHeight/2-150);
        /*this.greeting.style('color', 'red');*/

    });
}
}
