import { useState } from "react";

export const QRCodeGenerator = () => {
  const [qrCodeLink, setQRCodeLink] = useState("");
  const [qrCodeImage, setQRCodeImage] = useState("");

  const generateQRCode = () => {
    if (qrCodeLink.trim() !== "") {
      const qrCodeApiUrl = `http://chart.apis.google.com/chart?cht=qr&chl=${qrCodeLink}&chs=120x120`;
      setQRCodeImage(qrCodeApiUrl);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={qrCodeLink}
        onChange={(e) => setQRCodeLink(e.target.value)}
        placeholder="Enter the link for the QR code"
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrCodeImage && <img src={qrCodeImage} alt="QR Code" />}
    </div>
  );
};
