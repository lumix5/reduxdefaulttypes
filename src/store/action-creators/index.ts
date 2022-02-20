import * as userActionCreators from './user'
import * as TodoActionCreators from './todo'

export default {
    ...TodoActionCreators,
    ...userActionCreators
}

