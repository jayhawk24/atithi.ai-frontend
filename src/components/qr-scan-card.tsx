"use client"
import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { useState } from 'react';
import QrReader from './ui/qr-reader';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';


const QRScanCard = () => {
    const [isScanning, setIsScanning] = useState(false);
    const [scannedResult, setScannedResult] = useState("");
    const [roomCode, setRoomCode] = useState("");

    const router = useRouter();
    const pathname = usePathname();

    const addQueryParam = (code: string = scannedResult) => {
        const params = new URLSearchParams();
        params.set("room_code", code);
        router.push(`/room/?${params.toString()}`);
    };

    const handleSubmitCode = (code: string) => {
        if (code) {
            addQueryParam(code);
        }
    }

    useEffect(() => {
        if (scannedResult) {
            addQueryParam();
        }
    }, [scannedResult]);

    return (
        <div className="flex flex-col items-center justify-center gap-8 h-2/3 mt-10 border border-zinc-200 dark:border-zinc-700 rounded-xl p-10">
            <div className="w-full flex justify-center mb-10">
                <QrReader isScanning={isScanning} setIsScanning={setIsScanning} setScannedResult={setScannedResult} />
            </div>
            <Button className="mb-5 w-1/2" onClick={() => {
                setIsScanning(!isScanning);
                setScannedResult("")
            }}>
                {
                    isScanning ? "Scanning..." : <p>Click to <span className="font-bold">scan</span></p>
                }
            </Button>
            <h2 className="text-2xl mb-5">
                Please scan the room <span className="font-bold">
                    QR code,
                </span>
                <br />
                or enter the room code
            </h2>
            <div className="flex">
                <Input placeholder="Room code" className="mr-2" value={roomCode} onChange={(e) => setRoomCode(e.target.value)} />
                <Button className="w-10" onClick={() => handleSubmitCode(roomCode)}>
                    <ChevronRight />
                </Button>
            </div>
        </div>
    )
}

export default QRScanCard