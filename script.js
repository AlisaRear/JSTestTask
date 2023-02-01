(()=>{
    const from = document.getElementById('from');
    const to = document.getElementById('to');
    const amount = document.getElementById('amount');
    const calculate = document.getElementById('calculate');
    const result = document.getElementById('result');

    const baseUrl = 'https://data.fixer.io/api/convert?';
    const api_key = 'sAdRk9kyHM2Uox1SqD27eXgjY47zKias';

    calculate.addEventListener('click', ()=>{
        console.log(to.value);
            fetch(`${baseUrl}to=${to.value}&from=${from.value}&amount=${amount.value}?access_key=${api_key}`)
                .then(response => {
                    console.log(response);
                    result.innerHTML = `Result : ${response}`;
                })
    })
})();