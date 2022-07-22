import { createContext } from 'react'

export const SideContext = createContext()

export default function SideProvider({ children }) {
  return (
	<SideContext.Provider>
		{children}
	</SideContext.Provider>)
}
