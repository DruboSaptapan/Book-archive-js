const searchingField = document.getElementById('search-field');
const searchButton = document.getElementById('search-button');
const searchResult = document.getElementById('search-result');
const bookSearchResult = document.getElementById('book-search-result');
const error = document.getElementById('error');

searchButton.addEventListener('click', function() {
    const searchBook = searchingField.value;
    if (searchBook === '') {
        error.innerText = 'Search field can not be empty!'
        searchResult.innerText = '';
        bookSearchResult.innerText = '';
        return;
    }

    // clear the search input field
    searchingField.value = '';
    searchResult.innerText = '';
    bookSearchResult.innerText = '';
    error.innerText = '';

    const url = `https://openlibrary.org/search.json?q=${searchBook}`;
    fetch (url)
    .then (res => res.json())
    .then (data => {
        // error handling
        if (data.docs.length === 0) {
            error.innerText = 'No match found!'
        }
        else{
            bookSearchResult.innerText = '';
            data.docs.forEach(book => {
                const div = document.createElement('div');
                div.classList.add('col')
                div.innerHTML = `
                <div class = "border mb-3 rounded h-100">
                    <div class = "row g-0">
                        <div class = "col-md-4 m-3">
                            <img src = "https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class = "img-fluid">
                        </div>

                        <div class = "col-md-7 ms-2 my-3">
                            <div class = "body">
                                <h5 class = "card-title">${book.title}</h5>
                                <p class = "card-text">Author name: ${book.author}</p>
                                <p class = "card-text">Publisher name: ${book.publisher}</p>
                                <p class = "card-text">Publisher date: ${book.publisher_date}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `
                searchResult.appendChild(div);
                if (searchResult.childElementCount === 1) {
                    bookSearchResult.innerText = `${searchResult.childElementCount} match found...`;
                }
                else{
                    bookSearchResult.innerText = `${searchResult.childElementCount} matches found...`;
                }
            })
        }
    })
})