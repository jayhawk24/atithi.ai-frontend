'use client'
import QRScanCard from "@/components/qr-scan-card";

import { useSearchParams } from 'next/navigation'


export default function Home() {

  const searchParams = useSearchParams()
  const roomCode = searchParams.get('room_code')

  console.log(roomCode)

  return (
    <div className="h-full flex justify-center items-center">

      <QRScanCard />
    </div>
  );
}
