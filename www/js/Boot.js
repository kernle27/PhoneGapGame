
var game  = null;

function onDeviceReady () {
    game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO);
        
    game.state.add( "Boot", Boot );

    //Test
    game.state.start( "Boot" );

}

document.addEventListener("deviceready", onDeviceReady, false );


class Boot extends Phaser.State {

    constructor() {
        

        this.init = () => {
            
        }


        this.preload = () => {

        }


        this.create = () => {

        }

        
    }

}