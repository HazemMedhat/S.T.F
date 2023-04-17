const input = document.getElementById('myInput');
const myValue = '3.1';
const myValue2 = '2.9';
const myValue3 = '2.5';
const myValue4 = '2.3';
// 1
if (input.value >= myValue) {

    const departemntList = document.getElementById('departemntList');
    const newOptions = ['CS', 'IS', 'IT','AI' ,'DS'];
    departemntList.innerHTML = '';

    for (let i = 0; i < newOptions.length; i++) {
        const option = document.createElement('option');
        option.value = newOptions[i];
        departemntList.appendChild(option);
    }
    console.log('Input field have the  value:', myValue);
}
// 2
else if (input.value >= myValue2 && input.value < myValue) {
    const departemntList = document.getElementById('departemntList');
    const newOptions = ['CS', 'IT','AI' ,'DS'];
    departemntList.innerHTML = '';

    for (let i = 0; i < newOptions.length; i++) {
        const option = document.createElement('option');
        option.value = newOptions[i];
        departemntList.appendChild(option);
    }
    console.log('Input field have the  value:', myValue);
}
// 3
else if (input.value >= myValue3 && input.value < myValue2) {
    const departemntList = document.getElementById('departemntList');
    const newOptions =  [ 'IT','AI' ,'DS'];
    departemntList.innerHTML = '';

    for (let i = 0; i < newOptions.length; i++) {
        const option = document.createElement('option');
        option.value = newOptions[i];
        departemntList.appendChild(option);
    }
    console.log('Input field have the  value:', myValue);
}
// 4
else if (input.value >= myValue4 && input.value < myValue3) {
    const departemntList = document.getElementById('departemntList');
    const newOptions =  [ 'IT','DS'];
    departemntList.innerHTML = '';

    for (let i = 0; i < newOptions.length; i++) {
        const option = document.createElement('option');
        option.value = newOptions[i];
        departemntList.appendChild(option);
    }
    console.log('Input field have the  value:', myValue);
}
// 5
else if (input.value >= myValue5 && input.value < myValue4) {
    const departemntList = document.getElementById('departemntList');
    const newOptions =  ['DS'];
    departemntList.innerHTML = '';

    for (let i = 0; i < newOptions.length; i++) {
        const option = document.createElement('option');
        option.value = newOptions[i];
        departemntList.appendChild(option);
    }
    console.log('Input field have the  value:', myValue);
}
