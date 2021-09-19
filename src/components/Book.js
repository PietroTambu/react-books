import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button
} from "shards-react";
import { Col } from 'react-bootstrap';


const Book = ({ id, title, authors, image, averageRating, ratingCount }) => {
    let history = useHistory();
    return (
        <Col className='my-3'>
            <Card style={{ width: '18rem' }} className={'mx-auto'} border='secondary' onClick={() => {history.push(`/book/${id}`)}}>
                <CardHeader className='text-center'>{authors === '' ? 'Author: Unvailable' : authors}</CardHeader>
                <CardImg variant='top' src={image} />
                <CardBody>
                    <CardTitle className='text-center mt-1 mb-3'>{title}</CardTitle>
                    <p className='text-center'>{!averageRating ? '' : 'Rating: ' + averageRating + '/5, '} Reviews: {ratingCount}</p>
                </CardBody>
                <CardFooter className='text-center'><Link to={`/book/${id}`}><Button theme="secondary" size='sm' pill>More Details &rarr;</Button></Link></CardFooter>
            </Card>
        </Col>
    )
}

export default Book
