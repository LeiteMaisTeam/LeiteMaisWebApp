import styled from 'styled-components'

export const HeaderItem = styled.div`
  margin-inline: 0.5rem;
  padding: 1.5rem 0.5rem;
  font-size: 15px;
  font-weight: 600;
  color: white;
  border-bottom: 5px solid transparent;

  transition: border-bottom 100ms ease-in-out;

  :hover {
    border-bottom: 5px solid white;
  }

  ${({ active }) =>
    active &&
    `
    font-weight: 800;
    border-bottom: 5px solid white;
  `}
`
