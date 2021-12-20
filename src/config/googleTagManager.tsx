const GOOGLE_TAG_MANAGER_ENABLED_LOCAL_STORAGE_KEY =
    'googleTagManager:is_enabled'
const dataLayerName = 'dataLayer'
let isInitialized = false
const GTM_ID = 'GTM-58NKMPS'

const isGoogleTagManagerEnabled = () =>
    window.localStorage.getItem(
        GOOGLE_TAG_MANAGER_ENABLED_LOCAL_STORAGE_KEY
    ) === 'true'

export const initialize = async () => {
    const tagManagerArgs = {
        gtmId: GTM_ID,
        dataLayerName,
    }

    const TagManager = await import('react-gtm-module')

    TagManager.initialize(tagManagerArgs)
    isInitialized = true
}

export const setGoogleTagManagerEnabled = (isEnabled: boolean) => {
    const isEnabledPrev = isGoogleTagManagerEnabled()

    window.localStorage.setItem(
        GOOGLE_TAG_MANAGER_ENABLED_LOCAL_STORAGE_KEY,
        String(isEnabled)
    )
    if (isEnabledPrev && !isEnabled) {
        if (window[dataLayerName]) {
            window[dataLayerName] = []
        }

        window.location.reload()
        return
    }
    if (isEnabled && !isInitialized) {
        initialize()
    }
}

export default {
    setGoogleTagManagerEnabled,
}
