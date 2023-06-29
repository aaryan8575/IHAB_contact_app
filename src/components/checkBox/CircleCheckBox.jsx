"use client"
import React, { useState } from 'react';

const CircleCheckbox = ({ options, variant, borderColor, backgroundColor, tickColor }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleCheckbox = (value) => {
    if (checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    } else {
      setCheckedItems([...checkedItems, value]);
    }
  };

  return (
    <div className='flex flex-col gap-3 mt-[20px]'>
      {options.map((option) => (
        <div key={option.value} className="flex items-center justify-center">
          <div
            style={{
              width: '25px',
              height: '25px',
              borderRadius: variant === 'square' ? '0.5rem' : '50%',
              border: `2px solid ${borderColor}`,
              backgroundColor: checkedItems.includes(option.value)
                ? backgroundColor
                : '',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={() => toggleCheckbox(option.value)}
            role="checkbox"
            aria-checked={checkedItems.includes(option.value)}
          >
            {checkedItems.includes(option.value) && (
              <span style={{ fontSize: '1.5rem', color: tickColor }}>&#x2713;</span>
            )}
          </div>
          <label className='pl-[10px]' htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default CircleCheckbox;

