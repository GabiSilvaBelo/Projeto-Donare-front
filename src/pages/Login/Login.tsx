import React from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Login.css';


function Login() {
    return (

        <Grid container direction='row' justifyContent='center' alignItems='center' className='bg-color'>

            <Grid item alignItems='center' xs={6} >
                <Box paddingX={10} className='login-top' >
                    <form>
                        <Typography variant="h6" className='texto1'>Bem Vindo</Typography>

                        <Typography className='texto0'>E-mail ou telefone </Typography>
                        <TextField id='usuario' variant='outlined' margin='normal' name='Email ' fullWidth className='bordas' />

                        <Typography className='texto0'>Senha</Typography>
                        <TextField id='senha' type='password' variant='outlined' margin='normal' fullWidth className='bordas' />

                        <Link to='/home' style={{ textDecoration: 'none' }}>
                            <Box textAlign='center' marginTop={2}>
                                <Typography variant="h6" className='texto2' style={{ fontWeight: 'bold' }}>Esqueceu a senha? </Typography>
                                <Button type='submit' className='buttom'>  Entrar
                                </Button>
                            </Box>
                        </Link>
                    </form>

                    <Box display='flex' justifyContent='left' marginTop={2}>

                        <Typography variant='subtitle1' gutterBottom align='center' className='chamada1'>Não tem uma conta? </Typography>
                    </Box>
                    <Link to="/cadastrar" style={{ textDecoration: "none" }}>
                        <Typography variant='subtitle1' gutterBottom align='center' className='chamada2'>Cadastra-se </Typography>
                    </Link>
                </Box>


            </Grid>
            <Grid xs={3} className='imagem'>

            </Grid>
        </Grid>



    );
}

export default Login;