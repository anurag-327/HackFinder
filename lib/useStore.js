import {create} from "zustand"
import {devtools} from "zustand/middleware"

// creating store with zustand
export const useStore=create(((set) =>({
    isAdmin:false,
    setAdmin:(value) => set((state) => ({isAdmin:value})),
    user:null,
    setUser:(item) => set((state) => ({user:item})),
    resetUser:() => set((state) => ({user:null})),
    session:null,
    setSession:(item) => set((state) => ({session:item})),
    resetSession:() => set((state) => ({session:null})),
    hackathons:[],
    setHackathons:(item) => set((state) => ({hackathons:[item,...state.hackathons]})),
    initializeHackathons:(hacks) => set((state) => ({hackathons: hacks})),
    deleteHackathons:(id) => set((state) => ({hackathons: state.hackathons.filter(item => item.id!=id)})),
    globalLoading:true,
    setGlobalLoading:(val) => set((state) => ({globalLoading:val}))
})))
