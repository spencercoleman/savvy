import {
    Box,
    Container,
    Flex,
    Heading,
    Highlight,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import LoginForm from './LoginForm';
import splashArt from '../assets/undraw_key_points.svg';

const Splash = () => {
    return (
        <Container maxW="container.xl" centerContent p={{ base: 4, sm: 8 }}>
            <Flex
                wrap={{ base: 'wrap', lg: 'nowrap' }}
                justifyContent="center"
                gap={8}
            >
                <Stack gap={8} justifyContent="center">
                    <Heading size="2xl" color="blue.500">
                        Take control of your spending.
                    </Heading>
                    <Text fontSize="xl" display={{ base: 'block' }}>
                        <Highlight
                            query={['financial freedom', 'less stress']}
                            styles={{
                                px: '2',
                                py: '1',
                                bg: 'blue.100',
                            }}
                        >
                            Following a budget represents more financial freedom
                            and a life with much less stress.
                        </Highlight>
                    </Text>
                    <Box maxW={{ base: 'full', lg: 'sm' }}>
                        <LoginForm />
                    </Box>
                </Stack>
                <Image
                    src={splashArt}
                    alt="Woman looking at key points"
                    boxSize={{ md: 500, xl: 600 }}
                    overflow="clip"
                />
            </Flex>
        </Container>
    );
};

export default Splash;
