import React, { useState } from 'react';
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Container, Input, Button, } from '@chakra-ui/react'
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { Link as ReachLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

const Home = () => {
    const [errMsg,setErrMsg] = useState('');
    const navigate = useNavigate();
    const proceedUrl = async (enteredURL) =>{
        await axios({
            method: 'post',
            url: "https://url-shortner-eha2.onrender.com/createurl/",
            headers: {}, 
            data: {"longUrl": enteredURL}
          })
          .then((response) => {
            navigate('/stat', { state: response.data } );
          }, (error) => {
            setErrMsg(error.response.data);
          });
      }

    const handleSubmit = (e) =>{
            e.preventDefault();
            proceedUrl(e.target.enteredUrl.value);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
    	            <FormLabel>Enter Long URL</FormLabel>
                    <Input type='text' id='enteredUrl' name='enteredUrl' placeholder='Enter Your Long URL here...'/>
                    {errMsg===''? null : <FormHelperText color='red'>{errMsg}</FormHelperText>  }
                </FormControl>
                <Button mt={3} size='sm' type='submit' colorScheme='purple'>Short It!</Button>
            </form>
            <h4 mt={5} size='sm'>Want to statistics of your Short URL?<Link as={ReachLink} to={`/find`} color={'teal'}> Let's See!</Link></h4>
        </Container>
    );
};

export default Home;