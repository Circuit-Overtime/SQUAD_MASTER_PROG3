class Game 
{
    constructor(){}
getState()
    {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value" , function(data) {
            gameState = data.val();
    })
}
     updateState(state)
     {
         database.ref('/').update({
                 gameState: state
         });
     }
     async start()
     {
         if(gameState === 0){
             player = new Contestant();
             var contestantCountRef = await database.ref('playerCount').once("value");
             if(contestantCountRef.exists()){
                 playerCount = contestantCountRef.val();
                 player.getCount();
             }
             form = new Form();
             form.display();
         }
         p1 = createSprite(100,200);
         p2 = createSprite(200,200);
         p3 = createSprite(300,200);
         p4 = createSprite(400,200);
        parray = [p1, p2, p3, p4];

        }
         play()
         {
             form.hide();
             Contestant.getPlayerInfo();
             
             if(allPlayers !== undefined)
             {
                 var x = 0;
                 var y = 0;
                var index = 0;
                 background(back_img);
                 for(var plr in allPlayers)
                 {
                     index = index + 1;
                      x = x + 200;
                      y = displayHeight - allPlayers[plr].y;
                     parray[index-1].x = x;
                     parray[index-1].y = y;

                     if(index === player.index && player.index === 1)
                     {
                        background(back_img_Pol);
                     }
                    if(index === player.index && player.index === 2)
                     {
                        background(back_img_Mur);
                     }
                    if(index === player.index && player.index === 3)
                     {
                        background(back_img_King);
                     }
                     if(index === player.index && player.index === 4)
                     {
                        background(back_img_Rob);
                     }

                    
                     /*if(player.index === 1)
                     {
                         
                         player.index = a;
                         
                         background(back_img_Pol);
                         //console.log(player.index);

                     }
                     if(player.index === 2)
                     {
                         player.index = b;
                         background(back_img_Mur);
                         console.log(player.index)
                     }
                     if(player.index === 3)
                     {
                         player.index = c;
                         background(back_img_King);
                         console.log(player.index)
                     }
                     if(player.index === 4)
                     {
                         player.index = d;
                         background(back_img_Rob);
                         console.log(player.index)
                     }*/

                 }

             }
             drawSprites();
         }
         
     }

    


