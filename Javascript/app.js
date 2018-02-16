'use strict';
let surveyClicks = 0;

const surveyClickCount = 0;

const survey = {
    displayItems: [],
    table: document.getElementById('resultsTable'),
    grid: document.getElementById('pictures'),
    clicks : [],
    start: function () {

        if (localStorage.getItem('data')) {
            this.displayItems = JSON.parse(localStorage.getItem('data'));
            console.log('updated is', (this.displayItems));
            
        }   else {
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
        }


        this.grid.addEventListener('click', clickHandler);


    },


    getRandomDisplayItem: function() {
        const selectedItems = [];
        while (selectedItems.length < 3) {
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
        this.grid.removeEventListener ('click', clickHandler());
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
        for (let i = 0; i < 3; i++) {
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
            // console.table(products);
        }
    }
    if (surveyClicks < 25) {
        survey.render();
    } else if (surveyClicks === 25) {
        survey.ending();
    };
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



// create user storage to store current survey stats
// upon start, check to see if stats already stored (determine if user is first time vistor or refreshing - make data persist)
// if nothing there, create starting value... if something there, add to current start value (chart adds and displays totals of all users)
