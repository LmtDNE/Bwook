import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div>Please Select A Book!</div>;
    }
    return (
        <div>
          <h3>Deatils for: </h3>
          <div>Title: {this.props.book.title}</div>
          <div>Pages: {this.props.book.pages}</div>
        </div>
      );
  }
}

function mapStateToProps(state) {
  //whatever returned from here will show up as props inside BookDetail
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);