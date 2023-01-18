import { useRecoilState } from "recoil"
import { participantsList } from "../atom"

export const useAddUser = () => {
    const setList = useRecoilState(participantsList)
    return (partcipantName: string) => {
        return setList((currentList: any) => [...currentList, partcipantName])
    }
}