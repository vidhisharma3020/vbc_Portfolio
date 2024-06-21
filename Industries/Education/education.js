const budgetSlider = document.getElementById('ctBudget');
const budgetValue = document.getElementById('ctBudgetValue');

budgetSlider.addEventListener('input', function() {
    budgetValue.textContent = '$' + budgetSlider.value.toLocaleString();
});