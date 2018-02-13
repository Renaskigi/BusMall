'use strict';

const survey = {
    displayItems: [],
    start: function () {

        this.displayItems.push(
            new DisplayItem('bag','bag.jpg'),
            new DisplayItem('banana','banana.jpg'),
            new DisplayItem('bathroom','bathroom.jpg'),
            new DisplayItem('boots','boots.jpg'),
            new DisplayItem('breakfast','breakfast.jpg'),
            new DisplayItem('bubblegum','bubblegum.jpg'),
            new DisplayItem('chair','chair.jpg'),
            new DisplayItem('cthulu','cthulu.jpg'),
            new DisplayItem('dog-duck','dog-duck.jpg'),
            new DisplayItem('dragon','dragon.jpg'),
            new DisplayItem('pen','pen.jpg'),
            new DisplayItem('pet-sweep','pet-sweep.jpg'),
            new DisplayItem('scissors','scissors.jpg'),
            new DisplayItem('shark','shark.jpg'),
            new DisplayItem('sweep','sweep.png'),
            new DisplayItem('tauntaun','tauntaun.jpg'),
            new DisplayItem('unicorn','unicorn.jpg'),
            new DisplayItem('usb','usb.gif'),
            new DisplayItem('water-can','water-can.jpg'),
            new DisplayItem('wine-glass','wine-glass.jpg')
        );
    
        // show 3 random items

        // this.showItems();

        // const cards = document.getElementById('survey-cards');
        // cards.addEventListener('click', function() {
        //     console.log('card clicked', event.target);
        // })
            
        // const url = event.target.src;
        // for(let i = 0; i < survey.displayItems.length; i ++) {
        //     const cards = survey.displayItems[i];
            
        //     console.log('index of url', url.indexOf(fish.imageUrl));
        //     const endOfUrl = url.slice( url.indexOf(fish.imageUrl), url.length );
        //     // debugger;

        //     if (endOfUrl === fish.imageUrl) {
        //         fish.timesCaught++;
        //         console.table(fish);
        //     }
        // }

        // reselect and append new images
        // game.clearBoard();
        // game.showFish(); // what is this
        
    // },
    //     getRandomDisplayItem: function() {
    //         const selectedItems = [];
    //         for (let i = 0; i < 3; i++) {
    //             const randomNumber = Math.floor(Math.random() * this.displayItems.length);
    //             const numStore = this.displayItems[randomNumber];
    //             selectedItems.push(numStore);

            // const fishEle = fish.render();
            // section.appendChild(fishEle);
            // section.appendChild(fish.render());
    //     }
    //     console.table(getRandomDisplayItem);

    //     return selectedFishes;
    // }
//     getRandomSquares: function () {
//         const section = document.getElementById('game-board');
//         const allSquares = document.querySelectorAll('div.four');
//         const selectedSquares = [];
//         while(selectedSquares.length < 3) {
//             // get random square
//             const randomNumber = Math.floor(Math.random() * allSquares.length);
//             const square = allSquares[randomNumber];
//             if (selectedSquares.includes(square)) continue;
//             selectedSquares.push(square);
//         }

//         return selectedSquares;
//     },
//     showItems: function () {
//         // get three fish
//         const fishes = this.getRandomFish();

//         // get three squares
//         const squares = this.getRandomSquares();

//         // add fish to squares
//         for (let i = 0; i < squares.length; i++) {
//             squares[i].appendChild(fishes[i].render());
//         }
//     },
//     clearBoard: function () {
//         const allSquares = document.querySelectorAll('div.four');
//         for (let i = 0; i < allSquares.length; i ++) {
//             allSquares[i].textContent = '';
//         }
//     }
// };

function displayItem (name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.timesCaught = 0;
}

// Cuttlefish.prototype.render = function () {
//     const ele = document.createElement('img');
//     ele.src =  `/images/${this.imageUrl}`;
//     ele.setAttribute('alt', this.name);
//     return ele;
// };

// game.start();