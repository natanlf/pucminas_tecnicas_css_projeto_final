import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
    border: 0, 
    boxShadow: 'none',
  }));

const Footer = () => {
    return (
        <Box>
            <Grid container sx={{ flexGrow: 1, mt: 2 }} spacing={0}>
                <Grid item xs={12}>
                    <Item>@2023 Natan Lara Ferreira - Puc Minas</Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;