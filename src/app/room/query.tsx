import axiosInstance from "@/lib/axios"

const getRoomQuery = async (roomCode: string) => {
    const { data } = await axiosInstance.get(`/room/${roomCode}`)
    return data
}

export default getRoomQuery