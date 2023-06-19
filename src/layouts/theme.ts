import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';

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

export default theme;
