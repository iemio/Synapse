import { create, StateCreator } from "zustand";

import { immer } from "zustand/middleware/immer";
import createSelectors from "./selectors";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

type AuthState = {
    accessToken: string | null;
    user: null;
    setAccessToken: (accessToken: string) => void;
    clearAccessToken: () => void;
};

const createAuthSlice: StateCreator<AuthState> = (set) => ({
    accessToken: null,
    user: null,
    setAccessToken: (token) => set({ accessToken: token }),
    clearAccessToken: () => set({ accessToken: null }),
});

type StoreType = AuthState;

export const useStoreBase = create<StoreType>()(
    devtools(
        persist(
            subscribeWithSelector(
                immer((...a) => ({
                    ...createAuthSlice(...a),
                }))
            ),
            {
                name: "session-storage", // Name of the item in localStorage (or sessionStorage)
                getStorage: () => sessionStorage, // (optional) by default it's localStorage
            }
        )
    )
);

export const useStore = createSelectors(useStoreBase);
