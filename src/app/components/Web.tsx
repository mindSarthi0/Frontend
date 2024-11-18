import React, { useRef, useState, useEffect } from "react";

interface WebProps {
  url: string;
  onChangeUrl: (currentUrl: string) => void;
}

export const Web: React.FC<WebProps> = ({ url, onChangeUrl }) => {
  const iframeRef = useRef(null);
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    const checkIframeUrl = () => {
      if (iframeRef.current) {
        try {
          const currentUrl = iframeRef.current.contentWindow.location.href;
          if (currentUrl !== url) {
            setIframeUrl(currentUrl);
            onChangeUrl(currentUrl);
            console.log("Iframe URL changed to:", iframeRef.current);
          }
        } catch (error) {
          // If we can't access the iframe URL due to cross-origin issues, ignore the error
        }
      }
    };

    const intervalId = setInterval(checkIframeUrl, 1000); // Check every second

    return () => {
      clearInterval(intervalId);
    };
  }, [url]);

  return (
    <div>
      <iframe
        ref={iframeRef}
        src={url}
        style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}
      />
    </div>
  );
};
