"use client"
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Select from 'react-select';

// const Dropdown = ({ options, isClearable, isSearchable, name, typography, borderColor, placeholder, hoverColor }) => {
  
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (selectedOption) => {
//     if (!selectedOption && isSearchable) {
//       setErrorMessage('Option not found');
//     } else {
//       setErrorMessage('');
//     }
//   };

//   const customStyles = {
//     control: (provided, state) => ({
//       ...provided,
//       borderColor: errorMessage ? 'red' : borderColor,
//     }),
//     singleValue: (provided, state) => ({
//       ...provided,
//       color: typography,
//     }),
//     option: (provided, state) => ({
//       ...provided,
//       color: typography,
//       backgroundColor: state.isFocused ? hoverColor : provided.backgroundColor,
//     }),
//   };
  
//   const filterOption = ({ label }, inputValue) => {
//     return label.toLowerCase().includes(inputValue.toLowerCase());
//   };

//   return (
//     <>
//     <Select
//       className="basic-single"
//       classNamePrefix="select"
//       options={options}
//       isClearable={isClearable}
//       isSearchable={isSearchable}
//       name={name}
//       styles={customStyles}
//       placeholder={placeholder}
//        onChange={handleChange}
//        filterOption={filterOption}
//        noOptionsMessage={() => null}
//       />
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//     </>
    
//   );
// };

// Dropdown.propTypes = {
//   options: PropTypes.array.isRequired,
//   isClearable: PropTypes.bool,
//   isSearchable: PropTypes.bool,
//   name: PropTypes.string,
//   typography: PropTypes.string,
//   borderColor: PropTypes.string,
//   placeholder: PropTypes.string,
//   hoverColor: PropTypes.string,
// };

// Dropdown.defaultProps = {
//   isClearable: true,
//   isSearchable: true,
//   name: 'color',
//   typography: '#000000',
//   borderColor: '#000000',
//   placeholder: 'Select an option',
//   hoverColor: '#eaeaea',

// };

// export default Dropdown;

import React, { useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const Dropdown = (props) => {
  const {
    options,
    placeholder,
    borderColor,
    hoverColor,
    typography,
    // width,
  } = props;

  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (selected) => {
    setSelectedOption(selected);
    setError('');
  };

  const handleInputChange = (inputValue) => {
    if (inputValue && inputValue.trim().length === 0) {
      setError('Invalid input');
    } else {
      setError('');
    }
  };

  const handleMenuClose = () => {
    if (!selectedOption && error === '') {
      setError('Please select an option');
    }
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      // border: `1px solid ${borderColor}`,
      // width: width,
      border: `1px solid ${error ? 'red' : borderColor}`,
      borderRadius: '4px',
    }),
    option: (provided, { isFocused }) => ({
      ...provided,
      backgroundColor: isFocused ? hoverColor : 'transparent',
    }),
    placeholder: (provided) => ({
      ...provided,
      ...typography,
    }),
  };

  return (
    <div>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        onInputChange={handleInputChange}
        onMenuClose={handleMenuClose}
        isClearable
        isSearchable
        placeholder={placeholder}
        styles={customStyles}
      />
      {error && <p className='text-[red]'>{error}</p>}
    </div>
  );
};

Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    isClearable: PropTypes.bool,
    isSearchable: PropTypes.bool,
    name: PropTypes.string,
    typography: PropTypes.string,
    borderColor: PropTypes.string,
    placeholder: PropTypes.string,
    hoverColor: PropTypes.string,
  };
  
  Dropdown.defaultProps = {
    isClearable: true,
    isSearchable: true,
    name: 'color',
    typography: '#000000',
    borderColor: '#000000',
    placeholder: 'Select an option',
    hoverColor: '#eaeaea',
  };

export default Dropdown;






