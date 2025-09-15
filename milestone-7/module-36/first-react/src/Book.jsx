import Library from "./Library";
function Book({book}){
    return(
        <div>
            <h3>Name : {book.name} Book Price : {book.price}</h3>
        </div>
    )
}
export default Book;