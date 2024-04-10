const Book = (prop) => {
    return (
        <div>title:{prop.book.title} <br />
            author:{prop.book.author}
        </div>
    )

}
export default Book;