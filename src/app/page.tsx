import Headers from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-screen h-screen md:max-w-screen-sm bg-zinc-50 dark:bg-zinc-900 p-5">
        <Headers />
        <div className="h-full flex justify-center">
          <div className="flex flex-col items-center justify-around h-2/3 mt-10">
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
      </div>
    </div>
  );
}
