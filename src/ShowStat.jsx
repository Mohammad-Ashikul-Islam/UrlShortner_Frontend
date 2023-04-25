import { Box, Button, Container, Flex, Input, Text, useClipboard } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';

const ShowStat = () => {
    const { state } = useLocation();
    const shortUrl = "http://localhost:4000/findUrl/"+state.shortUrlCode;
    const { onCopy, value, setValue, hasCopied } = useClipboard(shortUrl);
    return (
        <Container mt={5}>
            <Box>
                <Text>Your Short URL: 
                    <Flex >
                        <Input value={value} disabled/>
                        <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
                    </Flex>
                </Text>
            </Box>
            <br/>
            <Box>
                <Text>Long URL: 
                    <Flex >
                        <Input value={state.longUrl}/>
                    </Flex>
                </Text>
            </Box>
            <Box mt={5}>
                <Text>Total Visits: {state.visitCount} </Text>
                <Text>Created At: {state.createdAt.slice(0,10)} </Text>
            </Box>
        </Container>
    );
};

export default ShowStat;