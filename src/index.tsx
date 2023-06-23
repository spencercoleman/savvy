import {
    ChakraProvider,
    ColorModeScript,
    createStandaloneToast,
} from '@chakra-ui/react';
import theme from './layouts/theme';
import ReactDOM from 'react-dom/client';
import App from './App';

const { ToastContainer } = createStandaloneToast();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
        <ToastContainer />
    </ChakraProvider>
);
