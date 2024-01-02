import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'

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

export const useLoginStore = create<LoginState & LoginActions>()(immer(devtools((set, get) => ({
  isLoggedIn: false,
  loggingIn: false,
  profile: undefined,

  login: async () => {
    if (!get().loggingIn) {
      set(state => {
        state.loggingIn = true
      })
      try {
        const { profile } = await loginFn()

        set(state => {
          state.isLoggedIn = true
          state.profile = profile
        })
      } catch (error) {
        // toast({id: '', message: error})
        console.error(error)
      } finally {
        set(state => {
          state.loggingIn = false
        })
      }
    }
  },
  logout: () => {
    set(initialState)
  }
}), { enabled: process.env.NODE_ENV !== 'production', name: 'LoginStore' })))
