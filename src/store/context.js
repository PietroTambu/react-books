import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from "react";
import requestData from '../core/request';

const url = 'https://www.googleapis.com/books/v1/volumes?q=';
const urlApiKey = '&key=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('Harry Potter l\'ordine della fenice')
    const [books, setBooks] = useState([])

    const fetchBooks = useCallback(async () => {
        setLoading(true)
        const data = await requestData.axiosBooksRequest(`${url}${searchTerm}${urlApiKey}${process.env.REACT_APP_BOOK_API_KEY}`)
        console.log(data)
        data.success ? setBooks(data.data) : console.log(data.data)
        setLoading(false)
    }, [searchTerm])

    useEffect(() => {
        fetchBooks()
    }, [searchTerm])

    return (
        <AppContext.Provider value={{ loading, books, setSearchTerm, searchTerm }}>
            { children }
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
