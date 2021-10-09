import React, { useState } from 'react';
import './App.css';

export const App: React.FC = () => {
  const [title, setTitle] = useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(title);
    }
  };

  return (
    <div className='App'>
      <div>Greenbox</div>
      <input
        type='text'
        id='title'
        value={title}
        placeholder='add some text'
        onChange={changeHandler}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};
