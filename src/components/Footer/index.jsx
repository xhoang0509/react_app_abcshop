import { Box, createTheme } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import * as React from 'react';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const footers = [
    {
        title: 'Công ty',
        description: ['Đội ngũ', 'Lịch sử', 'Liên hệ với chúng tôi', 'Trụ sở'],
    },
    {
        title: 'Tính năng',
        description: [
            'Công cụ',
            'Tính năng ngẫu nhiên',
            'Tính năng nhóm',
            'Công cụ dành cho nhà phát triển',
        ],
    },
    {
        title: 'Tài nguyên',
        description: ['Tên tài nguyên', 'Tài nguyên khác'],
    },
    {
        title: 'Điều khoản',
        description: ['Chính sách bảo mật', 'Điền khoản sử dụng'],
    },
];

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {},
    title: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    },
}));
function Footer() {
    const classes = useStyles();
    return (
        <Box
            component="footer"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 8,
                py: [3, 6],
                background: '#fff',
            }}
        >
            <Container>
                <Grid container spacing={4} justifyContent="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" className={classes.title} gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="text.secondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Copyright sx={{ mt: 5 }} />
        </Box>
    );
}

export default Footer;
