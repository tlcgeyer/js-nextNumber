let currentIndex = 0;

function getNextNumber(numbers) {
    if (currentIndex >= numbers.length) {
        currentIndex = 0; // Reset to the beginning of the array if we reach the end
    }

    const nextNumber = numbers[currentIndex];
    currentIndex++;
    
    return nextNumber;
}

document.addEventListener('DOMContentLoaded', function () {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const currentNumberElement = document.getElementById('currentNumber');
    const nextButton = document.getElementById('nextButton');

    function updateNumber() {
        const nextNumber = getNextNumber(numbersArray);
        currentNumberElement.innerText = nextNumber;
    }

    // Initial setup
    updateNumber();

    // Add click event listener to the next button
    nextButton.addEventListener('click', updateNumber);
});
