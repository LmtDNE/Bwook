export function selectBook (book) {
  //selectBook is an action creater
  //must return a type and payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}