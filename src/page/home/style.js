import styled from 'styled-components'

export const HomeWraper = styled.div `
  color:pink;
`
export const PicWraper = styled.div `
  &.pic{
    width:300px;
    height:300px;
    background:url(${(props)=>(props.imgUrl)})
  }
`
