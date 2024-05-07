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


const searchInput = document.getElementById('search')

async function getData() {
    const api = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=e171d2c395404c9cb49af54c89283081')
    const {articles} = await api.json()
    
    document.getElementById('content').innerHTML = card(articles)
    return articles;
    
}


async function search() {
    const input = searchInput.value.toLowerCase();
    const data = await getData();
    console.log(data)
    
    const filteredData = data.filter(item => {
        console.log(item)
        return item.title.toLowerCase().includes(input)
    })
    
    document.getElementById('content').innerHTML = card(filteredData)
    
}

getData()
searchInput.addEventListener('input', search)

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