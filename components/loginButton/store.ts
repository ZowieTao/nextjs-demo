import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type LoginState = {
  isLoggedIn: boolean
  loggingIn: boolean
  profile?: UserProfile
}

type LoginActions = {
  login: () => Promise<void>
  logout: () => void
}

interface UserProfile {
  name: string;
}

type LoginResp = { profile: UserProfile, token: string }

const loginFn = function () {
  return new Promise<LoginResp>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        resolve({ token: 'fake-xxxx', profile: { name: 'zowie' } })
      } else {
        reject({ message: 'login failed, cause...' })
      }
    }, 500)
  })
}

const initialState: LoginState = {
  isLoggedIn: false,
  loggingIn: false,
  profile: undefined
}

export const useLoginStore = create<LoginState & LoginActions>()(immer(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        login: async () => {
          if (!get().loggingIn) {
            set(state => {
              state.loggingIn = true
            }, false, 'login start')
            try {
              const { profile } = await loginFn()

              set(state => {
                state.isLoggedIn = true
                state.profile = profile
              }, false, 'login success')
            } catch (error) {
              // toast({id: '', message: error})
              console.error(error)
            } finally {
              set(state => {
                state.loggingIn = false
              }, false, 'login finish')
            }
          }
        },
        logout: () => {
          set(initialState, false, 'logout')
        }
      }), {
      name: 'myLoginStore',
      partialize: (state) => {
        return Object.fromEntries(
          Object.entries(state).filter(([key, val]) => {
            return !['loggingIn'].includes(key)
          })
        )
      },
      // partialize: (state) => { 
      //   return {
      //     isLoggedIn: state.isLoggedIn,
      //     profile: state.profile
      //   }
      // }

      // storage: createJSONStorage(() => sessionStorage),
      storage: createJSONStorage(() => localStorage),
    }
    ),
    { enabled: process.env.NODE_ENV !== 'production', name: 'LoginStore' }
  )
))
