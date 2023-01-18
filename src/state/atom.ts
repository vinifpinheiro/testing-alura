import { atom } from "recoil";

export const participantsList = atom<string[]>({
    key: 'partcipantsList',
    default: []
})
