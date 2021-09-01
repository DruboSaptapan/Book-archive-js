const searchingBook = () =>{
    const searchingfield = document.getElementById('search-field');
    const searchBook = searchingfield.value;
    
    // clear searching field
    searchingfield.value = '';

    // load data of books
    const url = `https://openlibrary.org/search.json?q=${searchBook}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

// searched book in the display
