import styled from 'styled-components'

export const CreatePost = styled.div`
padding-top: 43px;
border-width: 0px 1px 1px 1px;
border-style: solid;
border-color: #C5C5C5;
  display: flex;
  max-width: 700px;
  margin: 0 auto;
  img{
    max-width: 100px;
    max-height: 70px;
  }
`

export const PostForm = styled.form`
  align-items: flex-end;
  textarea{
    min-width: 100%;
    min-height: 70px;
    resize: none;
    border: 1px solid #8BC34A;
    border-radius: 10px;
  }

  input{
    font-family: 'Questrial';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
    background: #6033AA;
    border-radius: 30px;
    max-width: 164px;
    border: none;
    padding: 8px 57px 8px 48px;
    margin-top: 18px;
    margin-bottom: 28px;
  }
`;