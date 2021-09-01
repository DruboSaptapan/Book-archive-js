const searchingBook = () =>{
    const searchingfield = document.getElementById('search-field');
    const searchBook = searchingfield.value;
    
    // clear searching field
    searchingfield.value = '';

    // load data of books
    const url = `https://openlibrary.org/search.json?q=${searchBook}`
    fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data.docs))
    .then(data => displaySearchResult(data.docs));
}

// searched book in the display
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    docs.forEach(book =>{
        const div = document.createElement('div');
        // div.classList.add('col-lg-6','col-12');
        // div.innerHTML = `
        // <ul>
        //     <li><strong>Book Name:</strong> ${book.text[4]}</li>
        //         <ul>
        //             <li><strong>Author:</strong> ${book.author_name}</li>

        //             <li><strong>Publisher:</strong> ${book.publisher}</li>
                    
        //             <li><strong>First Publish:</strong> ${book.publish_date}</li>
        //         </ul>
        // </ul>
        // `

        div.classList.add('row','g-0', 'my-3', 'border' );
        div.innerHTML = `
        <div class="col-md-4">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <ul>
                <li><strong>Book Name:</strong> ${book.text[3]}</li>
                <ul>
                    <li><strong>Author:</strong> ${book.author_name}</li>
                    
                    <li><strong>Publisher:</strong> ${book.publisher}</li>
                    
                    <li><strong>First Publish:</strong> ${book.publish_date}</li>
                
                </ul>
            </ul>
        </div>
        `
        console.log(book)
        searchResult.appendChild(div);
    })
}