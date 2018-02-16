const settingsForm = document.getElementById('settings-form');

settingsForm.addEventListener('submit', function () {
    event.preventDefault();
    const numProducts = this['num-products'].value;
    const numRounds = this['num-rounds'].value;
    const settings = {
        numProducts: numProducts,
        numRounds: numRounds,
    };
    localStorage.setItem('settings', JSON.stringify(settings));
};
