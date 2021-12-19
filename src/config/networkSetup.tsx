export type EthereumNetwork = {
    chainId: string
    blockExplorerUrls?: string[]
    chainName?: string
    iconUrls?: string[]
    nativeCurrency?: {
        name: string
        symbol: string
        decimals: number
    }
    rpcUrls?: string[]
}

export const CHAIN = {
    DEFAULT: 56,
    BSC: 56,
    BSC_FORK: 30001,
    POLYGON: 137,
    POLYGON_FORK: 30002,
}

export const networkSettings: {
    [key: number]: EthereumNetwork
} = {
    [CHAIN.BSC]: {
        chainId: `0x${parseInt('56', 10).toString(16)}`,
        chainName: 'BSC Mainnet',
        nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18,
        },
        rpcUrls: ['https://bsc-rpc.moonrhythm.io'],
        blockExplorerUrls: ['https://bscscan.com/'],
    },
    [CHAIN.BSC_FORK]: {
        chainId: `0x${parseInt('30001', 10).toString(16)}`,
        chainName: 'BSC Mainnet - KSW Fork',
        nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18,
        },
        rpcUrls: ['https://bsc-fork-660985486031323166.rcf2.deploys.app'],
        blockExplorerUrls: ['https://bscscan.com/'],
    },
    [CHAIN.POLYGON]: {
        chainId: `0x${parseInt('137', 10).toString(16)}`,
        chainName: 'Matic(Polygon) Mainnet',
        nativeCurrency: {
            name: 'MATIC Coin',
            symbol: 'MATIC',
            decimals: 18,
        },
        rpcUrls: ['https://rpc-mainnet.matic.network'],
        blockExplorerUrls: ['https://polygonscan.com'],
    },
    [CHAIN.POLYGON_FORK]: {
        chainId: `0x${parseInt('30002', 10).toString(16)}`,
        chainName: 'Matic(Polygon) Fork',
        nativeCurrency: {
            name: 'MATIC Coin',
            symbol: 'MATIC',
            decimals: 18,
        },
        rpcUrls: ['https://matic-fork-660985486031323166.rcf2.deploys.app'],
        blockExplorerUrls: ['https://polygonscan.com'],
    },
}

const networkTxUrls: { [key: number]: (hash: string) => string } = {
    [CHAIN.BSC]: (hash: string) => `https://bscscan.com/tx/${hash}`,
    [CHAIN.BSC_FORK]: (hash: string) => `https://bscscan.com/tx/${hash}`,
    [CHAIN.POLYGON]: (hash: string) => `https://polygonscan.com/tx/${hash}`,
    [CHAIN.POLYGON_FORK]: (hash: string) =>
        `https://mumbai.polygonscan.com/tx/${hash}`,
}

const networkAddressUrls: { [key: number]: (hash: string) => string } = {
    [CHAIN.BSC]: (addr: string) => `https://bscscan.com/address/${addr}`,
    [CHAIN.BSC_FORK]: (addr: string) => `https://bscscan.com/address/${addr}`,
    [CHAIN.POLYGON]: (hash: string) =>
        `https://polygonscan.com/address/${hash}`,
    [CHAIN.POLYGON_FORK]: (hash: string) =>
        `https://mumbai.polygonscan.com/address/${hash}`,
}

export const getChainLogo = (chainId: number) => {
    switch (chainId) {
        case CHAIN.BSC:
        case CHAIN.BSC_FORK:
            return '/images/chains/binance.svg'
        case CHAIN.POLYGON:
        case CHAIN.POLYGON_FORK:
            return '/images/chains/polygon.svg'
        default:
            break
    }
}

export const getChainName = (chainId: number) =>
    networkSettings[chainId]?.chainName || ''

export const getRpcUrl = (chainId: number) =>
    networkSettings[chainId]?.rpcUrls?.[0] || ''

export const getTxUrl = (chainId: number) => networkTxUrls[chainId]

export const getAddressUrl = (chainId: number) => networkAddressUrls[chainId]
