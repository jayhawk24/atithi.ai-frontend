"use client"
import { useQuery } from "@tanstack/react-query"
import getRoomQuery from "./query"
import toast from "react-hot-toast"

export default function Page() {
    const searchParams = new URLSearchParams(window.location.search)
    const roomCode = searchParams.get('room_code')

    if (!roomCode) {
        return (
            <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <div className="w-full">
                    No room code provided
                </div>
            </div>
        )
    }


    const getRoom = useQuery({
        queryKey: ['room', roomCode],
        queryFn: () => getRoomQuery(roomCode as string),
        enabled: !!roomCode,
    })

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full">
                Room
            </div>
            {getRoom.isError && toast.error("Room not found")}
        </div>
    )
}
