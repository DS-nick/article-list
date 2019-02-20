import {normalizedComments as defaultComment} from '../fixtures'
import {} from '../constants'

const commentsMap = defaultComment.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, {})

export default (commentsState = commentsMap, action) => {
    const {type, payload} = action

    switch(type) {
        
    }
    return commentsState

}

