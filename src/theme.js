import { createMuiTheme } from '@material-ui/core/styles';

export function LightTheme() {
    return createMuiTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#f44336',
            },
            secondary: {
                main: '#cfcfcf',
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
                main: '#3d3c3c',
            },
            background: {
                default: '#1f1e1e',
            },
        },
    });
}