import {CHANGE_RANGE, SELECT} from '../constants'


const defaultFilters = {
    selected: [],
    dataRange: {
    from: undefined,
    to: undefined
    }

}

export default (filters= defaultFilters, action) => {

    const {type, payload} = action

    switch(type) {

        case CHANGE_RANGE:
        return {...filters, dataRange: payload.dataRange}

        case SELECT:
        return {...filters, selected: payload.selection}
    }
    return filters

}