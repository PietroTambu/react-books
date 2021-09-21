import React from 'react'
import Book from './Book'
import Loading from './Loading'
import { useGlobalContext } from '../store/context'
import { Row } from "react-bootstrap";

const BooksList = () => {
    const {books, loading, searchTerm} = useGlobalContext();

    if (loading) {
        return <Loading />
    }
    if ( books.length < 1) {
        return <h2 className='section-title'>No Books matched your search criteria</h2>
    }

    return (
        <section>
            <h2 className='section-title px-3'>{searchTerm}</h2>
            <Row sm={1} md={2} lg={3} xl={3} xxl={4} className='mx-auto book-list-row mb-3'>
                {books.map((item) => {return <Book key={item.id} {...item} />})}
            </Row>
        </section>
    )
}

export default BooksList
