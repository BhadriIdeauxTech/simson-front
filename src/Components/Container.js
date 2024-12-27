import styled from 'styled-components'
import { THEME } from '../Theme'

export const Container_fluid = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* padding: 0 10px; */
`


export const Container = styled.div`
  width: 100%;
  margin: 15px auto;
  padding-right: calc(${THEME.gutter_x} * 0.5);
  padding-left: calc(${THEME.gutter_x} * 0.5);

  @media ${THEME.MOBILEL} {
    max-width: 570px;
  }

  @media ${THEME.TABLET} {
    max-width: 758px;
  }

  @media ${THEME.LAPTOP} {
    max-width: 982px;
  }

  @media ${THEME.LAPTOPL} {
    max-width: 1190px;
  }

  @media ${THEME.DESKTOP} {
    max-width: 1390px;
  }

  @media ${THEME.DESKTOPL} {
    max-width: 1790px;
  }
`