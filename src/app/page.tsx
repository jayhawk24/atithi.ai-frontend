import Headers from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-8 h-2/3 mt-10 border border-zinc-200 dark:border-zinc-700 rounded-xl p-10">
        <div className="w-full flex justify-center mb-10">
          <Image src="/icons8-qr-code.gif" alt="logo" width={150} height={150} className="border-solid border-2 border-white rounded-md dark:bg-white p-5" />
        </div>
        <Button className="mb-5 w-1/2">
          Click to<span className="font-bold">scan</span>
        </Button>
        <h2 className="text-2xl mb-5">
          Please scan the room <span className="font-bold">
            QR code,
          </span>
          <br />
          or enter the room code
        </h2>
        <div className="flex">
          <Input placeholder="Room code" className="mr-2" />
          <Button className="w-10">
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
