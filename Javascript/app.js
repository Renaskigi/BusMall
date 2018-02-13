'use strict';
const selectedItems = [];
const survey = {
    displayItems: [],
    surveyClicks: 0,
    start: function () {

        this.displayItems.push(
            new DisplayItem('bag','bag.jpg', 0, 0, 'reference'),
            new DisplayItem('banana','banana.jpg', 0, 0, 'reference'),
            new DisplayItem('bathroom','bathroom.jpg', 0, 0, 'reference'),
            new DisplayItem('boots','boots.jpg', 0, 0, 'reference'),
            new DisplayItem('breakfast','breakfast.jpg', 0, 0, 'reference'),
            new DisplayItem('bubblegum','bubblegum.jpg', 0, 0, 'reference'),
            new DisplayItem('chair','chair.jpg', 0, 0, 'reference'),
            new DisplayItem('cthulhu','cthulhu.jpg', 0, 0, 'reference'),
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
        const grid = document.getElementById('pictures');
        grid.addEventListener('click', function() {
            console.log('pic was clicked', event.target);
            const alt = event.target.alt;
            for(let i = 0; i < survey.displayItems.length; i ++) {
                const products = survey.displayItems[i];
                if (products.name === alt) {
                    products.timesClicked++;
                    console.table(products);
                }
            }
        });


    },

    getRandomDisplayItem: function() {
        while (selectedItems.length < 3) {
            const randomNumber = Math.floor(Math.random() * this.displayItems.length);
            const numStore = this.displayItems[randomNumber];
            if (!selectedItems.includes(numStore)) {
                selectedItems.push(numStore);
            };
        }
        console.table(selectedItems);
        return selectedItems;
    },

    render: function() {
        this.getRandomDisplayItem();
        for (let i = 0; i < 3; i++) {
            const imageHolder = document.getElementById('pictures');
            const ele = document.createElement('img');
            ele.src = 'images/' + selectedItems[i].imageUrl;
            ele.setAttribute('alt', selectedItems[i].name);
            imageHolder.appendChild(ele);
            console.log(selectedItems[i]);
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
survey.render();