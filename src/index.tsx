import {
    ChakraBaseProvider,
    extendBaseTheme,
    withDefaultColorScheme,
} from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';
import ReactDOM from 'react-dom/client';
import App from './App';

const { Button, Container, Input } = chakraTheme.components;

const theme = extendBaseTheme(
    {
        colors: {
            primary: chakraTheme.colors.blue,
        },
        components: {
            Button,
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
    <ChakraBaseProvider theme={theme}>
        <App />
    </ChakraBaseProvider>
);
