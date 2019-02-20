import {createSelector} from 'reselect'
import {mapToArr} from '../helpers'

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles

export const filtrateArticlesSelector = createSelector(filtersGetter, articlesGetter, (filters, articles) => {
    const {selected, dataRange: {from, to}} = filters

    return mapToArr(articles).filter(article => {
        const published  = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) && 
        (!from || !to || (published > from && published < to))
    })
})
