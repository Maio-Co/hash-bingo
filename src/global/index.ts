import { isDevelopmentMode } from '@/utils'
import { Connection } from '@solana/web3.js'

export const decimals = isDevelopmentMode() ? 9 : 6

const network = isDevelopmentMode() ? 'https://api.devnet.solana.com' : 'https://solana-mainnet.g.alchemy.com/v2/ZkWE4eFDbWVJJiAL73qmoBX8vpVp2hfs'
export const connection = new Connection(network)
