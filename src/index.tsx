import {
    ChakraProvider,
    extendTheme,
    withDefaultColorScheme,
} from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';
import ReactDOM from 'react-dom/client';
import App from './App';

const { Button, Card, Container, Input } = chakraTheme.components;

const theme = extendTheme(
    {
        colors: {
            primary: chakraTheme.colors.blue,
        },
        components: {
            Button,
            Card,
            Container,
            Input,
        },
    },
    withDefaultColorScheme({
        colorScheme: 'primary',
    })
);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
);
