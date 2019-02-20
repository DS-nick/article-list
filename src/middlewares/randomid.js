export default store => next => action {
    if(!action.generateid) return next(action)

    next( {
        ...action,
        randomid: (Date.now() + Math.random()).toString()

    })
}