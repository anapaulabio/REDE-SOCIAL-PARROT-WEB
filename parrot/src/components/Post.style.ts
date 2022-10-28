import styled from 'styled-components'

export const PostDetail = styled.div`
  max-width: 700px;
  border: 1px solid rgba(197, 197, 197, 1);
  min-height: 135px;
  a{
    margin-left: 0;
    margin-top: 29px;
    text-decoration:none;
    text-transform: capitalize;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #76BB4C;
  }
  p{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #919191;
    margin-left: 0;
    margin-top: 8px;
  }
  p.post{
    margin: 8px 0 30px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #000000;
  }
  img{
    max-width: 100px;
    max-height: 70px;
  }
  @media only screen and (max-width: 450px){
        img{display: none;}
    }
`