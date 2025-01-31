const form = document.querySelector('form')

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    //Usually after clicking submit button all the values in the form will get submitted to the browser ------ to avoid this we will use  e.preventDefault();
    const height = parseInt(document.querySelector('#height').value) 
    const weight = parseInt(document.querySelector('#weight').value) 
    const results = document.querySelector('#results')
    if (height === '' || height < 0 || isNaN(height))
    {
        results.innerHTML = `Please give a valid height ${height}`

    }
    else if (weight === '' || weight < 0 || isNaN(weight))
    {
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    else
    {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`
    }

})