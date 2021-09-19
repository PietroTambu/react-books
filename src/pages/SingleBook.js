import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { Button, Container, Row, Col } from 'react-bootstrap'
import requestData from "../core/request";

const url = 'https://www.googleapis.com/books/v1/volumes/'

const SingleBook = () => {
    const {id} = useParams();
    const [loading, setLoading] = React.useState(false);
    const [book, setBook] = React.useState(null);

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
                <div className='mx-auto fit-content mt-5'>
                    <Button variant='secondary'><Link to='/' className='text-white text-decoration-none'>Back Home</Link></Button>
                </div>
                <h2 className='text-center mt-5'>Book Not Found</h2>
            </>
        )
    }

    const { title, language, authors, categories, image, description } = book;
    return (
        <section>
            <div className='mx-auto fit-content my-4'>
                <Button variant='secondary'><Link to='/' className='text-white text-decoration-none'>Back Home</Link></Button>
            </div>
            <Container>
                <Row xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
                    <Col md='auto' lg='auto' xl='auto' xxl='auto' className='mx-auto pt-5'>
                        <div className='fit-content mx-auto border border-dark'>
                            <img src={image} alt={title} className='book-detail-image mx-auto'/>
                        </div>
                    </Col>
                    <Col className='mx-auto'>
                        <h4 className='mb-2 mt-5'>{authors}</h4>
                        <h3 className='mt-2 mb-4'>{title}</h3>
                        <h4 className='my-3'>Language: <span className='not-bold'>{language.toUpperCase()}</span></h4>
                        <h4 className='my-3'>Categories: </h4>
                        <p>{categories}</p>
                        <h4 className='my-3'>Description:</h4>
                        <p>{description.replace(/<[^>]+>/g, '')}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SingleBook
