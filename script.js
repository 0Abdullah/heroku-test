input = document.getElementById('input');
outputTitle = document.getElementById('output-title')
// fetch(`http://192.168.100.142:3000/array/${arrayIndex}`, {method: 'POST'}).then(response => {
//             return response.text();
//         })
//         .then(responseData => {
//             console.log(responseData);
//             console.log(arrayIndex);
//         })

input.addEventListener('keydown', e => {
    if(e.keyCode === 13) {
        fetcher()
    }
});




function fetcher() {
    let loader = '<div class="loader"></div>'
            outputTitle.style.display = 'none';
            document.getElementById('output').textContent = 'Type your password';
            document.getElementById('output').innerHTML = loader;
    
    if(input.value) {
        fetch(`http://192.168.100.142:3000/pwn/${input.value}`, {method: 'POST'}).then(response => {
            return response.text();
        })
        .then(responseData => {
            document.getElementById('output').textContent = `${responseData} times`;
            console.log(`Pwn count: ${responseData}`)
            outputTitle.style.display = 'flex';
        })
    } 
}