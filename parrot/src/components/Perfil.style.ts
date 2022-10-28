import styled from "styled-components";


export const Avatar = styled.div`
height: 70px;
width: 70px;
@media only screen and (max-width: 500px){
        img{display: none;}
    }
`
export const Titulo = styled.h4`
color: #76bb4c;


`
export const Texto = styled.p`
line-height: 5px;

`

export const Editar = styled.button`

width: 128px;
height: 28px;
color: #FFFFFF;
margin: 10px;
background: #76BB4C;
border-radius: 30px;
border-color: #76BB4C;
@media only screen and (max-width: 500px){
        position: relative;
    }
`
