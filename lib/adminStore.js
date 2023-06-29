import {create} from "zustand"
import {devtools} from "zustand/middleware"

// creating store with zustand
export const adminStore=create(((set) =>({
    verifiedHackathons:[],
    setVerifiedHackathons:(item) => set((state) => ({verifiedHackathons:[item,...state.verifiedHackathons]})),
    initializeVerifiedHackathons:(hacks) => set((state) => ({verifiedHackathons: hacks})),
    deleteVerifiedHackathons:(id) => set((state) => ({verifiedHackathons: state.verifiedHackathons.filter(item => item.id!=id)})),

    unverifiedHackathons:[],
    setUnverifiedHackathons:(item) => set((state) => ({unverifiedHackathons:[item,...state.unverifiedHackathons]})),
    initializeUnverifiedHackathons:(hacks) => set((state) => ({unverifiedHackathons: hacks})),
    deleteUnverifiedHackathons:(id) => set((state) => ({unverifiedHackathons: state.unverifiedHackathons.filter(item => item.id!=id)})),
    
})))
