let money = +prompt('Ваш месячный бюджет?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    timeData: time
};

/*let ans1 = prompt('Введите обязательную статью расходов в этом месяце'),
    ans2 = prompt('Введите сумму'),
    ans3 = prompt('Введите обязательную статью расходов в этом месяце'),
    ans4 = prompt('Введите сумму');
    
    appData.expenses.ans1 = ans2;
    appData.expenses.ans3 = ans4;*/

/*for(let i = 0; i < 2; i++) {
    let ansa = prompt('Введите обязательную статью расходов в этом месяце'),
        ansb = prompt('Введите сумму');
    
    appData.expenses[ansa] = ansb;
};*/

let i = 0;

/*while(i < 2) {
    let ansa = prompt('Введите обязательную статью расходов в этом месяце'),
        ansb = prompt('Введите сумму');
    
    appData.expenses[ansa] = ansb;
    i++; 
};*/

do {
    let ansa = prompt('Введите обязательную статью расходов в этом месяце'),
        ansb = prompt('Введите сумму');
    
    appData.expenses[ansa] = ansb;
    i++;
} while(i < 2);

let detectDayBudget = () => {
    let DayBudget = appData.budget / 30;
    appData.DayBudget = DayBudget;
    alert('Ваш бюджет на день: ' + DayBudget)
    return DayBudget;
};

let detectLevel = () => {
    if(appData.DayBudget <= 700) {
        console.log('мне жаль');
    } else if(appData.DayBudget > 700 && appData.DayBudget < 4000) {
        console.log('средний заработок');
    } else if(appData.DayBudget >= 4000) {
        console.log('респект');
    } else {
        console.log('что-то пошло не так');
    }
};

let chooseOptExpenses = () => {
    let i = 1;
    while(i < 4) {
        let ansOpt = prompt('Статья необязательных расходов?');
        
        appData.optionalExpenses[i] = ansOpt;
        i++;
    }
};

console.log(appData);
detectDayBudget();
detectLevel();
chooseOptExpenses();