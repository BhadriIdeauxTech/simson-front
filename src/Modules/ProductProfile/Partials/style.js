import styled from 'styled-components'

export const ImageHolder = styled.div`
    background:red;
    position: relative;
    width: 300px;
    height: 150px;
    & img{
        position:absolute;
        height: 100%;
        width: 100%;
        object-fit:contain;
    }
`
export const FormSubTitle = styled.h6`
    font-size:1rem;
    text-align:left;
    background:#3d8cbd;
    margin:10px;
    padding:5px;
    color:#fff;
`