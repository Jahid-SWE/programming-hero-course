import Book from "./Book";

function Library({books}){
    
    return(
        <div>
            <h3>My National Central Library</h3>
            <p>Books collections: {books.length} </p>
            <p>Address : </p>
            <ul>
                {
                    books.map(book=><Book key={book.id} book={book} ></Book>)
                }
            </ul>
        </div>
    )

}

export default Library;