const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcDay = document.querySelector('.calc-day');
    const calcCount = document.querySelector('.calc-count');
    const totalValue = document.getElementById('total');

    const countSum = () => {
        let total = 0;
        let countValue = 1;
        let dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value;
        let squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }
        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        }
        totalValue.textContent = total;
    }


    calcBlock.addEventListener('change', (event) => {
        const target = event.target;
        // 1 способ
        // if (target.matches('.calc-type') || target.matches('.calc-square') ||
        // target.matches('.calc-count') || target.matches('.calc-day')) {
        // 	console.log(1);
        // }

        // 2 способ
        // if (target === calcType || target === calcSquare || target === calcCount || target === calcDay) {
        // 	console.log(1);
        // }

        // 3 способ
        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    })
}

export default calc;