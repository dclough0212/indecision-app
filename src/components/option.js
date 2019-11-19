import React from 'react';

export const Option = (props) => (
      <div className="option">
      <p className="option__text">{props.count}. {props.optionText}</p>
        <button className='button button--link' key={props.optionText} 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);}}>Remove</button>
      </div>
    );
