import '../styles/globals.css'

import { AuthProvider } from '../contexts/AuthContext'

import { StateProvider } from "../contexts/StateProvider";
import reducer, { initialState } from "../reducers/reducer";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider intialState={initialState} reducer={reducer}>
     <AuthProvider>
      <Component {...pageProps} />
     </AuthProvider>
    </StateProvider>
  )
}

export default MyApp
