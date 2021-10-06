let money = prompt('Ваш месячный бюджет?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    timeData: time
}

let ans1 = prompt('Введите обязательную статью расходов в этом месяце'),
    ans2 = prompt('Введите сумму'),
    ans3 = prompt('Введите обязательную статью расходов в этом месяце'),
    ans4 = prompt('Введите сумму');

appData.expenses.ans1 = ans2;
appData.expenses.ans3 = ans4;

alert(appData.budget / 30);