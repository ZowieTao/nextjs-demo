import { useLoginStore } from "./store"
import { useShallow } from "zustand/react/shallow"

export default function LoginButton() {
  const
    { btnContent, isLoggedIn, loggingIn, login, logout } = useLoginStore(useShallow((state) => {
      const profile = state.profile
      const btnContent = state.isLoggedIn ? `hi, ${profile?.name}, click to logout` : 'LogIn'

      return {
        btnContent,
        isLoggedIn: state.isLoggedIn,
        loggingIn: state.loggingIn,
        profile: state.profile,
        login: state.login,
        logout: state.logout
      }
    }))

  return (
    <p
      className="fixed left-0 top-14 flex w-full justify-center text-base border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 cursor-pointer"
      onClick={isLoggedIn ? logout : login}>
      {loggingIn ? 'login...' : btnContent}
    </p>
  )
}