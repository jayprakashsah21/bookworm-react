import React from 'react'

class AddedBookCta extends React.Component{

    render() {
        const books=this.props.books
        return(
            <ul className="PlayerList">
           
            {
                books.map(function(book) {
                    return (
                        <div>
                        <li >Book Title: {book.title}, 
                            Book Author:{book.authors},
                            Book pages: {book.pages}
                        </li>
                        <img src={book.cover}/>
                    </div>
                    )
                })
            }
            </ul>
        )
    }
}
export default AddedBookCta