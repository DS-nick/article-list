import {normalizedArticles as defaultArticle} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'
import {arrTomap} from '../helpers'

export default (articleState = arrTomap(defaultArticle), action) => {
    const {type, payload} = action

    switch(type) {
        case DELETE_ARTICLE :
        const tmpState = {...articleState}
        delete tmpState[payload.id]
        return tmpState
    }
    return articleState
}