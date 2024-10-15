import React from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  wrapperClass?: string;
  ctaName?: string;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  children,
  wrapperClass = "",
  ctaName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Popup container */}
      <div
        className={`relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full mx-6 ${wrapperClass}`}
        style={{ maxWidth: "600px" }}
      >
        {/* Content */}
        <div className="popup-content">{children}</div>

        {/* CTA Button */}
        {ctaName && (
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="bg-[#54A4DF] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              {ctaName}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
