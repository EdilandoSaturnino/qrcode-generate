import { useEffect, useState, useRef } from "react";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeValue, setQRCodeValue] = useState("");
  const qrCodeRef = useRef(null);

  const handleGenerateQRCode = () => {
    if (inputValue.trim() !== "") {
      setQRCodeValue(inputValue);
    }
  };

  const handleSaveQRCode = () => {
    if (qrCodeRef.current !== null) {
      html2canvas(qrCodeRef.current).then(function (canvas) {
        var link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = `qrcode-${Math.floor(Math.random() * 1000000)}.png`;
        link.click();
      });
    }
  };

  useEffect(() => {
    handleGenerateQRCode();
  }, [inputValue]);

  return (
    
    <main className="h-[75vh] flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Gerador de QR Code
        </h1>
        <p className="text-gray-700 text-center">
          Insira uma URL ou texto para gerar o seu QR Code
        </p>
        <div className="flex items-center my-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Insira aqui"
            className="flex-grow p-2 rounded-l-md focus:outline-none shadow-md"
          />
        </div>
        {qrCodeValue && (
          <>
            <div className="flex justify-center" ref={qrCodeRef}>
              <QRCode value={qrCodeValue} viewBox={`0 0 256 256`} />
            </div>
            <div className="text-end mt-6">
              <button
                onClick={handleSaveQRCode}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Salvar QR Code
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
