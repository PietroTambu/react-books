import React from 'react'
import { useGlobalContext } from '../store/context'
import {
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    FormInput,
    Button } from 'shards-react'

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext()
    const searchBookLg = React.useRef('')
    const searchBookSm = React.useRef('')
    const [inputValue, setInputValue] = React.useState('')
    const searchBook = () => {
        if (inputValue !== '') {
            setSearchTerm(inputValue)
            searchBookLg.current.value = ''
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div className='text-center w-75 my-4 mx-auto'>
                    <InputGroup className="mx-auto w-100 my-5 d-none d-sm-flex">
                        <FormInput size='lg' placeholder="Search your book" aria-label="Book" innerRef={searchBookLg} onChange={() => {setInputValue(searchBookLg.current.value)}}/>
                        <InputGroupText className='mx-auto'>
                            <Button type="reset" theme="danger" className='mx-auto'>Clear</Button>
                        </InputGroupText>
                        <InputGroupText>
                            <Button type="submit" theme="secondary" className='mx-auto' onClick={searchBook}>Search</Button>
                        </InputGroupText>
                    </InputGroup>
                    <div className="mx-auto w-100 my-5 d-block d-sm-none">
                        <FormInput size='lg' placeholder="Search your book" aria-label="Book" innerRef={searchBookSm} onChange={() => {setInputValue(searchBookSm.current.value)}}/>
                        <br />
                        <div className='d-flex mx-auto fit-content'>
                            <InputGroupText className='mx-auto' >
                                <Button className='mx-auto' type="reset" theme="danger">Clear</Button>
                            </InputGroupText>
                            <InputGroupText className='mx-auto'>
                                <Button className='mx-auto' type="submit" theme="secondary" onClick={searchBook}>Search</Button>
                            </InputGroupText>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default SearchForm
