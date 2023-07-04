import React, { useState } from 'react';
import ResponseContext from './ResponseContext';

const ResponseProvider = ({ children }) => {
  const [response, setResponse] = useState(null);

  return (
    <ResponseContext.Provider value={{ response, setResponse }}>
      {children}
    </ResponseContext.Provider>
  );
};

export default ResponseProvider;
