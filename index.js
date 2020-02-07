const url = 'https://kitsu.io/api/edge/'
// let url2 = url + Input.value "/"

fetch(url, {
    headers: { 
        'application/vnd.api+json` : 'Accept: application/vnd.api+json'
}
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

        