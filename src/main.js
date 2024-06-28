import Phaser from 'phaser';
import GameScene from './scenes/GameScene';

document.addEventListener('DOMContentLoaded', () => {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: [GameScene],
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        }
    };

    const game = new Phaser.Game(config);
});
