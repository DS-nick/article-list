import {DELETE_ARTICLE, INCREMENT, CHANGE_RANGE, SELECT} from '../constants'


export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function changeDataRange(dataRange) {
    return {
        type: CHANGE_RANGE,
        payload: {dataRange}
    }
}

export function changeSelection(selection) {
    return {
        type: SELECT,
        payload: {selection}
    }
}