import { combineReducers } from 'redux';

import comments from './commentsReducer';
import settings from './settingsReducer';

export default combineReducers({
    comments: comments,
    settings: settings,
});
