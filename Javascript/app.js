'use strict';

const survey = {
    displayItems: [],
    start: function () {

        this.displayItems.push(
            new DisplayItem('bag','bag.jpg', 0, 0, 'reference'),
            new DisplayItem('banana','banana.jpg', 0, 0, 'reference'),
            new DisplayItem('bathroom','bathroom.jpg', 0, 0, 'reference'),
            new DisplayItem('boots','boots.jpg', 0, 0, 'reference'),
            new DisplayItem('breakfast','breakfast.jpg', 0, 0, 'reference'),
            new DisplayItem('bubblegum','bubblegum.jpg', 0, 0, 'reference'),
            new DisplayItem('chair','chair.jpg', 0, 0, 'reference'),
            new DisplayItem('cthulu','cthulu.jpg', 0, 0, 'reference'),
            new DisplayItem('dog-duck','dog-duck.jpg', 0, 0, 'reference'),
            new DisplayItem('dragon','dragon.jpg', 0, 0, 'reference'),
            new DisplayItem('pen','pen.jpg', 0, 0, 'reference'),
            new DisplayItem('pet-sweep','pet-sweep.jpg', 0, 0, 'reference'),
            new DisplayItem('scissors','scissors.jpg', 0, 0, 'reference'),
            new DisplayItem('shark','shark.jpg', 0, 0, 'reference'),
            new DisplayItem('sweep','sweep.png', 0 ,0, 'reference'),
            new DisplayItem('tauntaun','tauntaun.jpg', 0, 0, 'reference'),
            new DisplayItem('unicorn','unicorn.jpg', 0, 0, 'reference'),
            new DisplayItem('usb','usb.gif', 0, 0, 'reference'),
            new DisplayItem('water-can','water-can.jpg', 0, 0, 'reference'),
            new DisplayItem('wine-glass','wine-glass.jpg', 0, 0, 'reference')
        );
    },
    
    getRandomDisplayItem: function() {
        const selectedItems = [];
        for (let i = 0; i < 3; i++) {
            const randomNumber = Math.floor(Math.random() * this.displayItems.length);
            const numStore = this.displayItems[randomNumber];
            selectedItems.push(numStore);
        }
        console.table(selectedItems);
        return selectedItems;
    },

    render: function() {
        for (let i = 0; i < 3; i++) {
            const imageHolder = document.getElementById('pictures');
            const ele = document.createElement('img');
            ele.src = 'images/' + this.displayItems[i].imageUrl;
            imageHolder.appendChild(ele);
            console.log(this.displayItems[i]);
        };
    }
};
function DisplayItem (name, imageUrl,timesShown, timesClicked, referenceString) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.timesShown = timesShown;
    this.timesClicked = timesClicked;
    this.referenceString = referenceString;
}



survey.start();
survey.getRandomDisplayItem();
survey.render();