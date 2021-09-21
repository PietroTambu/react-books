import React from 'react'
import Loading from '../components/Loading'
import { useParams, useHistory } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, CardHeader, CardImg, CardFooter, Button, Row, Col } from "shards-react";
import { BsBoxArrowUpRight } from "react-icons/bs"
import requestData from "../core/request";
import axios from "axios";

const url = 'https://www.googleapis.com/books/v1/volumes/'

const SingleBook = () => {
    const history = useHistory();
    const {id} = useParams();
    const [loading, setLoading] = React.useState(false);
    const [book, setBook] = React.useState(null);
    const [collapse, setCollapse] = React.useState(false);

    React.useEffect(async () => {
        setLoading(true);
        const data = await requestData.axiosBookRequest(`${url}${id}`);
        data.success ? setBook(data.data) : console.log(data.data);
        setLoading(false);
    }, [id])

    if (loading) {
        return <Loading />
    }

    if (!book) {
        return (
            <>
                <div className='mx-auto fit-content my-4'>
                    <Button theme='secondary' onClick={() => {history.push('/')}}>Back Home</Button>
                </div>
                <h2 className='text-center mt-5'>Book Not Found</h2>
            </>
        )
    }

    const { title, language, authors, categories, image, description, averageRating, ratingCount, infoLink, ISBN_13, ISBN_10, pageCount} = book;

    const checkUrl  = async () => {
        axios.get(infoLink)
            .then(() => {
                console.log('responde')
            })
            .catch((error) => {
                console.log('error', error)
            })
    }

    return (
        <section>
            <div className='mx-auto fit-content my-4'>
                <Button theme='secondary' onClick={() => {history.push('/')}}>Back Home</Button>
            </div>
            <div className='w-75 mx-auto'>
                <Card className='single-book-card mx-auto'>
                <CardHeader>
                    <h4>{authors}</h4>
                </CardHeader>
                    <Row xs={1} sm={1} md={1} lg={1} xl={1} xxl={2}>
                        <Col className='py-5 col-card mx-auto'>
                            <div className='fit-content mx-auto'>
                                <CardImg src={image} alt={title} className='ms-3 card-img'/>
                            </div>
                        </Col>
                        <Col>
                            <CardBody className='single-book-card'>
                                <CardTitle>
                                    <h3 className='mt-2 mb-4 text-center'>{title}</h3>
                                </CardTitle>
                                <p className='my-3'>Categories: <p>{categories}</p></p>
                                <p>{!averageRating ? '' : 'Rating: ' + averageRating + '/5, '} Reviews: {ratingCount}</p>
                                <p>Page Count: {pageCount}</p>
                                <p className='my-3'>Language: <span className='not-bold'>{language.toUpperCase()}</span></p>
                                <p>ISBN_10: {ISBN_10}</p>
                                <p>ISBN_13: {ISBN_13}</p>
                                <a href={infoLink} target='_blank'><Button size='sm' theme='light' onClick={() => {checkUrl()}}>More info <BsBoxArrowUpRight /></Button></a>
                                <h4 className='my-3'>Description: <Button theme='light' pill size='sm' onClick={() => {setCollapse(!collapse)}} className={description.replace(/<[^>]+>/g, '').length > 500 ? '' : 'd-none'}>More</Button></h4>
                                <p>{!collapse ? (description.replace(/<[^>]+>/g, '').length > 500) ? description.replace(/<[^>]+>/g, '').slice(0, 500).concat('...') : description.replace(/<[^>]+>/g, '') : description.replace(/<[^>]+>/g, '')}</p>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </div>
        </section>
    )
}

export default SingleBook
