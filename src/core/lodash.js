const _ = require('lodash');

const lodash = {
    lodashCheck (data) {
        return {
            id: _.get(data, ['id'], 'unavailable'),
            title: _.get(data, ['volumeInfo', 'title'], 'Unavailable'),
            language: _.get(data, ['volumeInfo', 'language'], 'Unavailable'),
            authors: this.arrayToString(_.get(data, ['volumeInfo', 'authors'], [])),
            categories: _.get(data, ['volumeInfo', 'categories', '0'], 'Unavailable'),
            image: _.get(data, ['volumeInfo', 'imageLinks', 'thumbnail'], 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'),
            description: _.get(data, ['volumeInfo', 'description'], 'Unavailable'),
            averageRating: _.get(data, ['volumeInfo', 'averageRating'], false),
            ratingCount: _.get(data, ['volumeInfo', 'ratingsCount'], 0)
        }
    },
    arrayToString(arr) {
        if (arr === []) {
            return 'Not Found'
        }
        let string = ''
        for (let i = 0; i < arr.length; i++) {
            i === 0 ? string = arr[i] : string = string + ', ' + arr[i]
        }
        return string
    }
}

export default lodash
