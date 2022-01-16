const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const countBtn = document.querySelector('.count');
const countError = document.querySelector('.error');
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector('.cost');
const countTip = () => {
    if (price.value <= 0 || price.value == '' || people.value <= 0 || people.value == '' || tip.value === 0) {
        countError.textContent = "Uzupełnij wszytkie pola."
        costInfo.style.display = 'none;';
    } else {
        countError.textContent = "";
        countBill();
    }
}

const countBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);
    const sum = (newPrice + (newPrice * newTip)) / newPeople;
    costInfo.style.display = 'block';
    cost.textContent = sum.toFixed(2);
};
countBtn.addEventListener('click', countTip);
