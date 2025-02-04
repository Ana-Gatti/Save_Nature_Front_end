import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import TabProduto from '../../components/produto/tabproduto/TabProduto';
import ModalProduto from '../../components/produto/modalProduto/ModalProduto';
import './Home.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';

function Home(){

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])
    
    return (
        <>
       <Grid container direction="row" justifyContent="center"  alignItems="center" style={{backgroundColor: "#ffffff"}}>
           <Grid alignItems="center"  item xs={6}>
               <Box paddingX={20} >
<Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{color: "#BD8A44" , fontWeight: "bold "}}>Seja bem vindo(a)!</Typography>
<Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{color: "#BD8A44"}}>Ao Mercado da Sustentabilidade</Typography>
       </Box>
       <Box display="flex" justifyContent="center">
           <Box marginRight={1} >
               </Box>
               <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#6B8E23", color: "white"}}>Ver Postagens</Button>
       </Box>
           </Grid>
           <Grid item xs={6} >
               <img src="https://i.imgur.com/j2DFr51.jpg" alt="" width="700px" height="500px" />
           </Grid>
           <Grid xs={12}  style={{ backgroundColor: "OliveDrab" }} >

           </Grid>
       </Grid>
        </>
    );
}

export default Home;