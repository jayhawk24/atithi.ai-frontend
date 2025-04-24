
import { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import Image from "next/image";

type Props = {
    isScanning: boolean;
    setIsScanning: React.Dispatch<React.SetStateAction<boolean>>
    setScannedResult: React.Dispatch<React.SetStateAction<string>>
}
const QrReader = ({ isScanning, setIsScanning, setScannedResult }: Props) => {
    // QR States
    const scanner = useRef<QrScanner>(null);
    const videoEl = useRef<HTMLVideoElement>(null);
    const qrBoxEl = useRef<HTMLDivElement>(null);
    const [qrOn, setQrOn] = useState<boolean>(true);

    // Success
    const onScanSuccess = (result: QrScanner.ScanResult) => {
        console.log(result);
        // ✅ Handle success.
        setScannedResult(result?.data);
        setIsScanning(false);
        setQrOn(false);
        scanner?.current?.stop();
    };

    // Fail
    const onScanFail = (err: string | Error) => {
        // 🖨 Print the "err" to browser console.
        console.log(err);
    };

    useEffect(() => {
        if (videoEl?.current && !scanner.current) {
            // 👉 Instantiate the QR Scanner
            scanner.current = new QrScanner(videoEl?.current, onScanSuccess, {
                onDecodeError: onScanFail,
                // 📷 This is the camera facing mode. In mobile devices, "environment" means back camera and "user" means front camera.
                preferredCamera: "environment",
                // 🖼 This will help us position our "QrFrame.svg" so that user can only scan when qr code is put in between our QrFrame.svg.
                highlightScanRegion: true,
                // 🔥 This will produce a yellow (default color) outline around the qr code that we scan, showing a proof that our qr-scanner is scanning that qr code.
                highlightCodeOutline: true,
                // 📦 A custom div which will pair with "highlightScanRegion" option above 👆. This gives us full control over our scan region.
                overlay: qrBoxEl?.current || undefined,
            });

            // 🚀 Start QR Scanner
            scanner?.current
                ?.start()
                .then(() => setQrOn(true))
                .catch((err) => {
                    if (err) setQrOn(false);
                });
        }

        // 🧹 Clean up on unmount.
        // 🚨 This removes the QR Scanner from rendering and using camera when it is closed or removed from the UI.
        return () => {
            if (!videoEl?.current) {
                scanner?.current?.stop();
            }
        };
    }, [isScanning]);

    // ❌ If "camera" is not allowed in browser permissions, show an alert.
    useEffect(() => {
        if (!qrOn)
            alert(
                "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
            );
    }, [qrOn]);

    return (
        <>
            {
                isScanning ? (
                    <div className="qr-reader">
                        <video className="rounded-xl" ref={videoEl}></video>
                        <div ref={qrBoxEl} className="qr-box"></div>
                    </div>
                ) : (<Image src="/icons8-qr-code.gif" alt="logo" width={150} height={150} className="border-solid border-2 border-white rounded-md dark:bg-white p-5" />)
            }
        </>
    );
};

export default QrReader;