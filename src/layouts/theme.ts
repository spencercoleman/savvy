import {
    extendTheme,
    withDefaultColorScheme,
    type ThemeConfig,
} from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';

const { Button, Card, Container, Input } = chakraTheme.components;

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
};

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
        config: config,
    },
    withDefaultColorScheme({
        colorScheme: 'primary',
    })
);

export default theme;
