const searchingBook = () =>{
    const searchingfield = document.getElementById('search-field');
    const searchBook = searchingfield.value;

    // clear searching field
    searchingfield.value = '';

    // load data of books
    const url = `https://openlibrary.org/search.json?q=${searchBook}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs));
}

// searched book in the display
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    docs.forEach(book =>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card mb-3 h-100" style="max-width: 540px;">
            <div class="row g-0">

                <div class="col-md-4">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="img-fluid" alt="...">
                </div>
                
                <div class="col-md-7 ms-2">
                    <div class="card-body">
                        <h5 class="card-title">${book.text[3]}</h5>
                        <p class="card-text">Author Name: ${book.author_name}</p>
                        <p class="card-text">P Name: ${book.publisher}</p>
                        <p class="card-text">Author Name: ${book.publish_date}</p>
                    </div>
                </div>

            </div>
        </div>
        `
        searchResult.appendChild(div);
    })
}