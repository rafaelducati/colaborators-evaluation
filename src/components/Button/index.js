import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './style.module.css'

const ButtonLabel = ({ display, label }) => {
  if (display.includes('circular')) {
    return <span className={style.circularLabel}>{label}</span>
  }

  return label
}

ButtonLabel.propTypes = {
  display: PropTypes.oneOf([
    'standard',
    'inline',
    'micro',
    'extended',
    'extendedMicro',
    'circular',
    'circularMicro',
  ]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

const Button = ({
  className,
  type,
  label,
  variant,
  display,
  onClick,
  disabled,
  bordered,
  element: ButtonElement,
  ...rest
}) => {
  const buttonClassNames = classNames(style.button, style[variant], style[display], {
    [style.bordered]: bordered,
    [style.disabled]: disabled,
  })

  const isCircular = display.indexOf('circular') !== -1

  if (isCircular) {
    const circularClassNames = classNames(className, style.circularContainer)

    return (
      <ButtonElement
        type={type}
        onClick={onClick}
        className={circularClassNames}
        disabled={disabled}
        {...rest}
      >

        {label ? (
          <ButtonLabel display={display} label={label} disabled={disabled} variant={variant} />
        ) : null}
      </ButtonElement>
    )
  }

  return (
    <ButtonElement
      type={type}
      onClick={onClick}
      className={classNames(buttonClassNames, className)}
      disabled={disabled}
      {...rest}
    >

      {label ? (
        <ButtonLabel display={display} label={label} disabled={disabled} variant={variant} />
      ) : null}
    </ButtonElement>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  display: PropTypes.oneOf([
    'standard',
    'inline',
    'micro',
    'extended',
    'extendedMicro',
    'circular',
    'circularMicro',
  ]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'negative', 'primaryGradient']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  bordered: PropTypes.bool,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object]),
}

Button.defaultProps = {
  className: null,
  display: 'standard',
  variant: 'primary',
  label: null,
  type: null,
  element: 'button',
  onClick: null,
  disabled: false,
  bordered: false,
}

export default Button
