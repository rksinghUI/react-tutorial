import Dispatcher  from '../dispatcher/appDispatcher';

export function createAuthor(AuthorName) {
  Dispatcher.dispatch({
    type: '',
    AuthorName
  })
}