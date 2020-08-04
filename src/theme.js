import { createMuiTheme } from '@material-ui/core/styles';

export function LightTheme() {
    return createMuiTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#f44336',
            },
            secondary: {
                main: '#ff7961',
            },
        },
    });
}

export function DarkTheme() {
    return createMuiTheme({
        palette: {
            type: 'dark',
            text: {
                primary: '#d3cec4',
            },
            primary: {
                main: '#cc3535',
            },
            secondary: {
                main: '#7f0000',
            },
            background: {
                default: '#212121',
            },
        },
    });
}