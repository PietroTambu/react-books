import axios from 'axios';
import lodash from "./lodash";

const requestData = {
    async axiosBooksRequest (url) {
        return axios.get(url)
            .then((res) => {
                const {items} = res.data;
                console.log(items)
                if (items) {
                    return {
                        success: true,
                        data: items.map((item) => {
                        return lodash.lodashCheck(item)
                    })}
                } else {
                    return {
                        success: true,
                        data: []
                    }
                }
            })
            .catch((error) => {
                return {
                    success: false,
                    data: error
                }
            })
    },
    async axiosBookRequest (url) {
        return axios.get(url)
            .then((res) => {
                return {
                    success: true,
                    data: lodash.lodashCheck(res.data)
                }
            })
            .catch((error) => {
                return {
                    success: false,
                    data: error
                }
            })
    }
}

export default requestData
