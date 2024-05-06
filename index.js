function card(data) {
    let card = ''
    data.forEach(function(data) {
        card += 
        `<div class="card mb-5" style="width: 30%;">
        <img src="${data.urlToImage}" class="card-img-top" style="height: 250px" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text"><small class="text-muted">${data.author} - ${data.publishedAt} </small></p>
                <p class="card-text">${data.description}</p>
                <a href="${data.url}" class="btn btn-primary">Read More</a>
            </div>
        </div>`
    })
    return card;
}

async function search(value) {
    const api = await fetch(`https://newsapi.org/v2/everything?q=${value}&apiKey=e171d2c395404c9cb49af54c89283081`)
    const {articles} = await api.json()

    return new Promise((success, failed) => {
        if(articles.length === 0) success(document.getElementById('content').innerHTML = 'artikel tidak ditemukan')
        else success(document.getElementById('content').innerHTML = card(articles))

    })
}

function userDisplay() {
    
        async function getData() {
            const api = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=e171d2c395404c9cb49af54c89283081')
            const {articles} = await api.json()

            document.getElementById('content').innerHTML = card(articles)

        }
        
        

        getData()
    
}
userDisplay()


// let info;

// async function getData() {
//     const api = await fetch('https://reqres.in/api/users')
//     const {data} = await api.json();
//     info = data
    
//     showData(info)
// }

// function showData(data) {
//     console.log(data)
// }

// getData()
// console.log(info)