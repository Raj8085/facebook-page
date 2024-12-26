import  { useEffect } from 'react';

function Popup({ show, onClose, phoneNumber, imageSrc }) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on component unmount
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    
      <div className="relative bg-white rounded shadow-lg max-w-md w-full overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Popup Content */}
        <div className="relative flex justify-center items-center">
          {/* Background Image */}
          <img
            src="/Housing-pop-up-no-number.jpg"
            alt="Popup Background"
            className="w-full h-auto object-cover max-h-[90vh] sm:max-h-[70vh] md:max-h-[60vh] rounded-lg"
          />

          {/* Support Number */}
          <a
            href={`tel:${phoneNumber}`}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4  rounded-full text-base sm:text-lg md:text-xl font-semibold shadow-lg hover:bg-blue-700"
          >
            {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Popup;