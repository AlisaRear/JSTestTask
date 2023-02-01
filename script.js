(()=>{
    const from = document.getElementById('from');
    const to = document.getElementById('to');
    const amount = document.getElementById('amount');
    const calculate = document.getElementById('calculate');
    const result = document.getElementById('result');

    const baseUrl = 'https://api.apilayer.com/fixer/convert?';
    const api_key = 'sAdRk9kyHM2Uox1SqD27eXgjY47zKias';

    let myHeaders = new Headers();
    myHeaders.append("apikey", api_key);
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    calculate.addEventListener('click', ()=>{
        console.log(to.value);
            fetch(`${baseUrl}to=${to.value}&from=${from.value}&amount=${amount.value}`,
                requestOptions)
                .then(response => response.text())
                .then(res => {console.log(res);
                    result.innerHTML = `Result : ${res}`;
                })
                .catch(error => console.log('error', error));
    })
})();