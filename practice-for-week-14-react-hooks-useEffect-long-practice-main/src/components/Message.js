import { useEffect, useState } from 'react';
function Message({ size, featherCount }) {
  const [sizeClass, setSizeClass] = useState('');
  useEffect(() => {
    setSizeClass(size);
  }, [size]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (featherCount <= 0)
      setMessage('Oh my! Your bird is naked!');
    else if (featherCount >= 10) {
      setMessage('Full turkey, lets eat!');
    } else {
      setMessage('Coming along...');
    }
  }, [featherCount])
  return (
    <div className={`message ${sizeClass}`}>
      {message}
    </div>
  );
};

export default Message;