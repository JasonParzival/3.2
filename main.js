async function process() {
    let r = await fetch("/data.json");
    let data = await r.json();
    console.log(data) 
    
    let mappedData = data.map(item => {
        return item['Насколько курс был полезен?'];
    })
    console.log(mappedData)

    let uniqueValues = [...new Set(mappedData)]
    console.log(uniqueValues)

    let select = document.querySelector("#selectPoleznost");
    console.log(select)

    uniqueValues.forEach(item => {
        let option = document.createElement("option"); 

        option.value = item; 
        option.text = item;

        select.add(option) 
    })

    //----------------------

    mappedData = data.map(item => {
        return item['Насколько доволен форматом обучения?'];
    })
    console.log(mappedData)

    uniqueValues = [...new Set(mappedData)]
    console.log(uniqueValues)

    select = document.querySelector("#selectDovolnost");
    console.log(select)

    uniqueValues.forEach(item => {
        let option = document.createElement("option"); 

        option.value = item; 
        option.text = item;

        select.add(option) 
    })

    //----------------------------

    mappedData = data.map(item => {
        return item['Отметь, в какой мере ты удовлетворен курсом?'];
    })
    console.log(mappedData)

    uniqueValues = [...new Set(mappedData)]
    console.log(uniqueValues)

    select = document.querySelector("#selectUdovletvoronost");
    console.log(select)

    uniqueValues.forEach(item => {
        let option = document.createElement("option"); 

        option.value = item; 
        option.text = item;

        select.add(option) 
    })
}

process()