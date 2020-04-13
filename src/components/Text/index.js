import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './style.module.css'

const Text = ({ className, children, innerHTML, variant, element }) => {
  const textClassNames = classNames(style.text, className, style[variant])

  const elementMap = {
    displayXXL: 'h1',
    displayXL: 'h2',
    displayL: 'h3',
    displayM: 'h4',
    displayS: 'h5',
    subtitle: 'h6',
    bodyL: 'p',
    buttonM: 'span',
    bodyM: 'p',
    buttonS: 'span',
    bodyS: 'p',
    cardContent: 'p',
    buttonXS: 'span',
    bodyXS: 'p',
    buttonXXS: 'p',
  }

  const TextElement = element || elementMap[variant]

  if (innerHTML) {
    return (
      <TextElement
        className={textClassNames}
        dangerouslySetInnerHTML={{ __html: innerHTML }}
      />
    )
  }

  return <TextElement className={textClassNames}>{children}</TextElement>
}

Text.propTypes = {
  className: PropTypes.string,
  element: PropTypes.string,
  variant: PropTypes.oneOf([
    'displayXXL',
    'displayXL',
    'displayL',
    'displayM',
    'displayS',
    'subtitle',
    'bodyL',
    'buttonM',
    'bodyM',
    'buttonS',
    'bodyS',
    'cardContent',
    'buttonXS',
    'bodyXS',
    'buttonXXS',
  ]),
  innerHTML: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.object,
  ]),
}

Text.defaultProps = {
  className: null,
  element: null,
  innerHTML: null,
  children: null,
  variant: 'bodyS',
}

export default Text
