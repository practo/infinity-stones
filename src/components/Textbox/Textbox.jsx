import React from 'react';
import PropTypes from 'prop-types';

const Textbox = (props) => {
  const {isVisible, qaId} = props;
  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <input className={props.className}
        type='text'
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        data-qa-id={`${qaId}_input`}
        disabled={props.isDisabled}
        size={props.size}
      />
    </div>
  )
}

Textbox.defaultProps = {
  isVisible: true,
  value: '',
  size: '20'
}

Textbox.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  qaId: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool
}

export default Textbox;
