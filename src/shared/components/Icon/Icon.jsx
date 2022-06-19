import React, { memo, forwardRef } from 'react'

import styled from 'styled-components'

import icons from 'shared/constants/icons'
import { Box } from '@chakra-ui/react'

export const LtmIconStyled = styled(Box)`
  flex-shrink: 0;
  stroke-width: 0;
  vertical-align: middle;
  backface-visibility: hidden;

  &:not(:root) {
    overflow: hidden;
  }

  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'unset')};
`

export const LtmIcon = memo(
  forwardRef((props, ref) => {
    const icon = icons[props.children] || icons[props.icon] || {}

    return (
      <LtmIconStyled
        ref={ref}
        as="svg"
        display="inline-block"
        viewBox={icon.viewBox || '0 0 24 24'}
        {...props}
      >
        {icon.path}
      </LtmIconStyled>
    )
  })
)

LtmIcon.displayName = 'LtmIcon'

LtmIcon.defaultProps = {
  color: 'grey.300',
  fontSize: '1.5rem',
  role: 'presentation',
  focusable: false,
  width: '1em',
  height: '1em'
}
