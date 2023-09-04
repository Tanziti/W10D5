import { useEffect, useState } from 'react';
function Message({ size }) {
  const [sizeClass, setSizeClass] = useState('');
  useEffect(() => {
    setSizeClass(size);
  }, [size]);
  return (
    <div className={`image-area ${sizeClass}`}>
      (Oh my! Your bird is dry and not tasty!)
    </div>
  );
};

export default Message;