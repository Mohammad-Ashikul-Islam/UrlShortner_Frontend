import React, { useState } from 'react';
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Container, Input, Button, } from '@chakra-ui/react'
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { Link as ReachLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

const SearchStat = () => {
    const [errMsg,setErrMsg] = useState('');
    const navigate = useNavigate();
    const proceedUrl = async (shortUrlCode) =>{
        await axios({
            method: 'get',
            url: `http://localhost:4000/findurl/${shortUrlCode}/stat`,
            headers: {}, 
            data: {}
          })
          .then((response) => {
            navigate('/stat', { state: response.data } );
          }, (error) => {
            console.log(error);
            setErrMsg(error.response.data);
          });
      }

    const handleSubmit = (e) =>{
            e.preventDefault();
            proceedUrl(e.target.shortUrlCode.value);
    }

    return (
        <Container>
            <br />
            <h4 mt={5} mb={5} size='sm'>To see Statistics, Enter Your Short Url Code in the box. If your URL is: https://abc.com/xyz/pqrs, then pqrs is your shortURL code</h4>
            <br/>
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
    	            <FormLabel>Enter shortURL Code</FormLabel>
                    <Input type='text' id='shortUrlCode' name='shortUrlCode' placeholder='Enter Your ShortURL Code here...'/>
                    {errMsg===''? null : <FormHelperText color='red'>{errMsg}</FormHelperText>  }
                </FormControl>
                <Button mt={3} size='sm' type='submit' colorScheme='pink'>See Stats!</Button>
            </form>
            <h4 mt={5} size='sm'>Want to create new Short URL?<Link as={ReachLink} to={`/`} color={'teal'}> Let's Short!</Link></h4>
        </Container>
    );
};

export default SearchStat;