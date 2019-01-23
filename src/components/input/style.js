import styled from 'styled-components'
import pic from '../../statics/logo.png'

export const InputWraper = styled.div `
  width: 400px;
  height: 100px;
  border: solid 10px #f00;
  .input{
    width:100%;
    height:100px;
  }
`
export const Button = styled.div `
  width:200px;
  height:112px;
  background-image:url(${pic});
  line-height:112px;
  text-align:center;
`
