'use strict';
let surveyClicks = 0;

const survey = {
    displayItems: [],
    table: document.getElementById('resultsTable'),
    grid: document.getElementById('pictures'),
    clicks: [],
    numProducts: 3,
    numRounds: 25,
    start: function () {

        if (localStorage.getItem('data')) {
            this.displayItems = JSON.parse(localStorage.getItem('data'));
            console.log('updated is', (this.displayItems));

        }   else {
            this.displayItems.push(
                new DisplayItem('bag','bag.jpg', 0, 0),
                new DisplayItem('banana','banana.jpg', 0, 0),
                new DisplayItem('bathroom','bathroom.jpg', 0, 0),
                new DisplayItem('boots','boots.jpg', 0, 0),
                new DisplayItem('breakfast','breakfast.jpg', 0, 0),
                new DisplayItem('bubblegum','bubblegum.jpg', 0, 0),
                new DisplayItem('chair','chair.jpg', 0, 0),
                new DisplayItem('cthulhu','cthulhu.jpg', 0, 0),
                new DisplayItem('dog-duck','dog-duck.jpg', 0, 0),
                new DisplayItem('dragon','dragon.jpg', 0, 0),
                new DisplayItem('pen','pen.jpg', 0, 0),
                new DisplayItem('pet-sweep','pet-sweep.jpg', 0, 0),
                new DisplayItem('scissors','scissors.jpg', 0, 0),
                new DisplayItem('shark','shark.jpg', 0, 0),
                new DisplayItem('sweep','sweep.png', 0 ,0),
                new DisplayItem('tauntaun','tauntaun.jpg', 0, 0),
                new DisplayItem('unicorn','unicorn.jpg', 0, 0),
                new DisplayItem('usb','usb.gif', 0, 0),
                new DisplayItem('water-can','water-can.jpg', 0, 0),
                new DisplayItem('wine-glass','wine-glass.jpg', 0, 0)
            );
        }

        if (localStorage.getItem('settings')) {
            const settings = JSON.parse(localStorage.getItem('settings'));
            console.log('settings are', settings);
            this.numRounds = settings.numRounds;
            this.numProducts = settings.numProducts;

        };

        this.grid.addEventListener('click', clickHandler);

    },

    getRandomDisplayItem: function() {
        const selectedItems = [];
        while (selectedItems.length < this.numProducts) {
            const randomNumber = Math.floor(Math.random() * this.displayItems.length);
            const numStore = this.displayItems[randomNumber];
            if (!selectedItems.includes(numStore)) {
                selectedItems.push(numStore);
            };
        }
        return selectedItems;
    },

    chartArray: function() {

        for (let i = 0; i < this.displayItems.length; i++) {
            this.clicks.push(this.displayItems[i].timesClicked);
            console.log(this.clicks);
        }
        return this.clicks;
    },

    ending: function() {
        // this.grid.removeEventListener ('click', clickHandler());
        const myChart = document.getElementById('myChart');
        const chrtCntxt = myChart.getContext('2d');
        const chart = new Chart(chrtCntxt, {
            type: 'bar',
            data: {
                labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
                datasets: [{
                    label: 'Times Clicked',
                    data: this.chartArray()
                }],
            }
        });
        localStorage.setItem('data', JSON.stringify(this.displayItems));
    },

    render: function() {
        const grabReturn = this.getRandomDisplayItem();
        for (let i = 0; i < this.numProducts; i++) {
            const imageHolder = document.getElementById('pictures');
            const ele = document.createElement('img');
            ele.src = 'images/' + grabReturn[i].imageUrl;
            ele.setAttribute('alt', grabReturn[i].name);
            imageHolder.appendChild(ele);
            grabReturn[i].timesShown++;
        }
    },

    clearTiles: function () {
        document.getElementById('pictures').textContent = '';
        surveyClicks++;
    },
};

function clickHandler() {
    survey.clearTiles();
    const alt = event.target.alt;
    for(let i = 0; i < survey.displayItems.length; i ++) {
        const products = survey.displayItems[i];
        if (products.name === alt) {
            products.timesClicked++;
        }
    }
    if (surveyClicks < survey.numRounds) {
        survey.render();
    } else {
        survey.ending();
    };
};

function DisplayItem (name, imageUrl,timesShown, timesClicked) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.timesShown = timesShown;
    this.timesClicked = timesClicked;
};

survey.start();
survey.render();
