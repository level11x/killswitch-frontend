import { BigNumber, ethers, utils } from 'ethers'

export const formatTvl = (tvl: number, oraclePrice?: number) => {
    if (oraclePrice) {
        tvl *= oraclePrice
    }

    const order = Math.floor(Math.log10(tvl) / 3)
    if (order < 0) {
        return '$' + utils.commify(tvl.toFixed(2))
    }

    const units = ['', 'k', 'M', 'B', 'T']
    const num = tvl / 1000 ** order
    const prefix = '$'

    return prefix + utils.commify(num.toFixed(2)) + units[order]
}

export const formatUSD = (
    n: number,
    oraclePrice?: number,
    showPrefix = true
) => {
    if (oraclePrice) {
        n *= oraclePrice
    }
    return (showPrefix ? '$' : '') + utils.commify(n.toFixed(2))
}

export const formatApy = (apy: number): string => {
    if (!apy) return `∞`

    apy *= 100

    const units = ['', 'k', 'M', 'B', 'T', 'Q', 'Q', 'S', 'S']
    const order = apy < 1 ? 0 : Math.floor(Math.log10(apy) / 3)
    if (order >= units.length - 1) return `🔥`

    const num = apy / 1000 ** order
    return `${num.toFixed(2)}${units[order]}%`
}

export const calcDaily = (apy: number) => {
    if (!apy) return `???`

    const g = Math.pow(10, Math.log10(apy + 1) / 365) - 1
    if (isNaN(g)) {
        return '- %'
    }

    return `${(g * 100).toFixed(2)}%`
}

export const formatCountdown = (deadline: number) => {
    const time = deadline - new Date().getTime()
    if (time < 0) {
        return 'Finished'
    }

    const day = Math.floor(time / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, '0')
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
        .toString()
        .padStart(2, '0')
    const minutes = Math.floor((time / (1000 * 60)) % 60)
        .toString()
        .padStart(2, '0')
    const seconds = Math.floor((time / 1000) % 60)
        .toString()
        .padStart(2, '0')

    return `${day} days ${hours}:${minutes}:${seconds}`
}

export const formatDecimals = (
    n: ethers.BigNumberish,
    decimals: number,
    toDecimals: number
): string => {
    const d = BigNumber.from(n)

    const remainder = d.mod(BigNumber.from(10).pow(decimals - toDecimals))
    return utils.formatUnits(d.sub(remainder), decimals)
}

// const BSC_BLOCK_TIME = 3
// const BLOCKS_PER_YEAR = (60 / BSC_BLOCK_TIME) * 60 * 24 * 365 // 10512000

// export const calcKswApr = (
//     kswPerBlock: number,
//     poolWeight: number,
//     kswPriceUsd: number,
//     poolLiquidityUsd: number
// ): number => {
//     const yearlyKswRewardAllocation = kswPerBlock * BLOCKS_PER_YEAR * poolWeight
//     let apr = yearlyKswRewardAllocation * kswPriceUsd
//     apr /= poolLiquidityUsd
//     apr *= 100
//     return Number.isNaN(apr) || !Number.isFinite(apr) ? null : apr
// }

export const etherToNumber = (n: string | number): number => {
    if (typeof n === 'number') {
        return n
    }
    return Number(utils.formatEther(BigNumber.from(n)))
}

export const formatDigitNumber = (n: number, digits: number) =>
    n.toLocaleString('en-US', {
        maximumFractionDigits: digits,
    })
