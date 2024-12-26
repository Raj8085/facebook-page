import { useState } from 'react';
import Popup from './PopCode';


function PopComponent() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div>
     

      <Popup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        phoneNumber="+108-654-49042"
        imageSrc="/Housing-pop-up-no-number.jpg"
      />
    </div>
  );
}

export default PopComponent;