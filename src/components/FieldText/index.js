import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import style from './style.module.css'

class FieldText extends React.Component {
  constructor() {
    super()

    this.state = {
      focused: false,
    }
  }

  handleFocus = (e) => {
    const { onFocus } = this.props
    if (onFocus) {
      onFocus(e)
    }

    this.setState({ focused: true })
  }

  handleBlur = (e) => {
    const { onBlur } = this.props
    if (onBlur) {
      onBlur(e)
    }

    this.setState({ focused: false })
  }

  render() {
    const { focused } = this.state
    const {
      value,
      label,
      placeholder,
      textarea,
      name,
      type,
      hint,
      disabled,
      readOnly,
      required,
      error,
      onChange,
      tabIndex,
      className,
    } = this.props

    const containerClassNames = classNames(style.container, className, {
      [style.error]: Boolean(error),
      [style.focused]: Boolean(focused),
      [style.filled]: Boolean(value),
      [style.hasPlaceholder]: Boolean(placeholder),
      [style.disabled]: Boolean(disabled),
    })

    return (
      <div className={containerClassNames}>
        <label className={style.field} htmlFor={`field-${name}`}>

        {textarea ? (
          <textarea
            className={style.textarea}
            id={`field-${name}`}
            tabIndex={tabIndex}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            onChange={onChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          >
            {value}
          </textarea>
         ) : (
            <input
              className={style.input}
              id={`field-${name}`}
              tabIndex={tabIndex}
              value={value}
              type={type}
              name={name}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={readOnly}
              required={required}
              onChange={onChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            )
          }

          {label && (
            <span className={style.label}>
              {label}
              {required ? '*' : null}
            </span>
          )}
        </label>

        <p className={style.supportText}>{error || hint}</p>
      </div>
    )
  }
}

FieldText.propTypes = {
  className: PropTypes.string,
  tabIndex: PropTypes.number,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  textarea: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.oneOf(['text', 'password', 'email', 'search']),
}

FieldText.defaultProps = {
  className: null,
  tabIndex: null,
  type: 'text',
  label: '',
  placeholder: '',
  hint: null,
  textarea: false,
  disabled: false,
  readOnly: false,
  required: false,
  error: null,
  onFocus: null,
  onBlur: null,
}

export default FieldText
