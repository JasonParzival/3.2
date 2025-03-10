async function process() {
    let r = await fetch("/data.json");
    let data = await r.json();
    console.log(data) // выведем исходный список
    
    let mappedData = data.map(item => {
        return item['Насколько курс был полезен?'];
    }) // мэпю
    console.log(mappedData)  // выведем отображенный список

    let uniqueValues = [...new Set(mappedData)]
    console.log(uniqueValues)
}

process()