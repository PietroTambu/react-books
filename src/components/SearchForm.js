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
    const searchValue = React.useRef('')
    const searchBook = () => {
        if (searchValue.current.value !== '') {
            setSearchTerm(searchValue.current.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div className='text-center w-75 my-4 mx-auto'>
                    <InputGroup className="mx-auto w-100 my-5">
                        <FormInput size='lg' placeholder="Search your book" aria-label="Book" innerRef={searchValue}/>
                        <InputGroupText>
                            <Button type="reset" theme="danger">Clear</Button>
                        </InputGroupText>
                        <InputGroupText>
                            <Button type="submit" theme="secondary" className='mx-auto' onClick={searchBook}>Search</Button>
                        </InputGroupText>
                    </InputGroup>
                </div>
            </form>
        </section>
    )
}

export default SearchForm
