export const logger = store => next => action => {
    console.log('action type: ', action.type);
    return next(action);
}
