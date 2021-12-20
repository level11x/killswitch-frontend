import { getAnalytics, setAnalyticsCollectionEnabled } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyDhIbN_iFyj2m_BW80OnKiySdbGCWT4-IA',
    authDomain: 'killswitch-2f90d.firebaseapp.com',
    projectId: 'killswitch-2f90d',
    storageBucket: 'killswitch-2f90d.appspot.com',
    messagingSenderId: '653756144372',
    appId: '1:653756144372:web:16c4cd476ea10464c85ca1',
    measurementId: 'G-4QRXHBV7J8',
}

export const initialize = () => {
    initializeApp(firebaseConfig)
}

export const setAnalyticsEnabled = (isEnabled: boolean) => {
    const analytis = getAnalytics()

    setAnalyticsCollectionEnabled(analytis, isEnabled)
}

export default initialize
