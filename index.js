const url = 'https://kitsu.io/api/edge/anime'
// let url2 = url + Input.value "/"
let tittle = document.querySelectorAll('.animeTittle')
let images = document.querySelectorAll('animeImage')

fetch(url, {
    headers :{ 
        'Content-Type': 'application/vnd.api+json', 
        'Accept': 'application/vnd.api+json'
    }
})
    .then(res => {
        console.log('success', res) // if it works well gt this 
        return res.json()
    })
    .then(res => {
        console.log(res)
    })   
    .catch(err => {
        console.log('something went wrong', err) // if it doest work well get this
    })
    