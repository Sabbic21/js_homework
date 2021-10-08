let money, time;

let start = () => {
    money = +prompt('Ваш месячный бюджет?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш месячный бюджет?', ''); 
    }
};

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    timeData: time,
    chooseExpenses: function() {
        let i = 0;
        do {
            let ansA = prompt('Введите обязательную статью расходов в этом месяце', ''),
                ansB = prompt('Введите сумму', '');
        
            if ((typeof(ansA)) === 'string' && (typeof(ansA)) != null && (typeof(ansB)) !== null
                && ansA != '' && ansB != '') {
                    appData.expenses[ansA] = ansB;
                    i++;
                } else {continue;}
        } while(i < 2); 
    },
    chooseOptExpenses: function() {
        let i = 1;
        while(i < 4) {
            let ansOpt = prompt('Статья необязательных расходов?', '');
            if ((typeof(ansOpt)) === 'string' && (typeof(ansOpt)) != null){
                appData.optionalExpenses[i] = ansOpt;
                i++;
            } else {continue;}
        }
    },
    detectDayBudget: function() {
        let DayBudget = (appData.budget / 30).toFixed();
        appData.DayBudget = DayBudget;
        alert('Ваш бюджет на день: ' + DayBudget);
        return DayBudget;
    },
    detectLevel: function() {
        if(appData.DayBudget <= 700) {
            console.log('мне жаль');
        } else if(appData.DayBudget > 700 && appData.DayBudget < 4000) {
            console.log('средний заработок');
        } else if(appData.DayBudget >= 4000) {
            console.log('респект');
        } else {
            console.log('что-то пошло не так');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Введите сумму накоплений: ', ''),
                percent = +prompt('Под какой процент?', '');
            
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Месячный доход с депозита: ' + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        let addIncomes = prompt('Что принесет дополнительный доход? (через запятую)', '');
        if (typeof(addIncomes) === 'string' && (typeof(addIncomes)) != null && addIncomes != '') {
            appData.income = addIncomes.split(', ');
            appData.income.push(prompt('Что-то еще?', ''));
            appData.income.sort();
        } else {alert('Вы не ввели строку!');}
        alert('Способы доп. заработка: ')
        appData.income.forEach(function(item, i) {
            alert(i + ': ' + item);
        });
    },
};

console.log('Программа включает в себя данные:');
for (let key in appData) { 
        console.log(key);
    } 
    

/*console.log(appData);
detectDayBudget();
detectLevel();
chooseOptExpenses();
chooseExpenses();
checkSavings();*/
