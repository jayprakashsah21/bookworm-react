import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage'
import AddBookCta from '../cta/AddBookCta'
import AddedBooksCta from '../cta/AddedBookCta'
import { allBooksSelector } from "../../reducers/books";
import {fetchBooks} from '../../actions/books'

class DashboardPage extends React.Component{

componentDidMount =() => this.onInit(this.props);

onInit =(props) =>props.fetchBooks();

  render(){
    const {isConfirmed,books}=this.props;
    return(
    <div>
        {!isConfirmed && <ConfirmEmailMessage/>}'
        {books.length === 0 ? <AddBookCta /> : <AddedBooksCta books={books}/>}
    </div>    
    )

  }

}

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
    books: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    fetchBooks:PropTypes.func.isRequired
  };
  
  function mapStateToProps(state) {
    return {
      isConfirmed: !!state.user.confirmed,
      books: allBooksSelector(state)
    };
  }
export default connect(mapStateToProps,{fetchBooks})(DashboardPage)
