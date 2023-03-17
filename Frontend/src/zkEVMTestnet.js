// zkEVMTestnet.ts
import { Chain } from 'wagmi'
export const zkEVMTestnet = {
    id: 1442,
    name: 'Polygon zkEVM Testnet',
    network: 'zkEVM',
    nativeCurrency: {
        decimals: 18,
        name: 'zkEVM',
        symbol: 'ETH',
    },
    rpcUrls: {
        public: { http: ['https://rpc.public.zkevm-test.net'] },
        default: { http: ['https://rpc.public.zkevm-test.net'] },
    },
    blockExplorers: {
        etherscan: { name: 'zkEVMExplorer', url: 'https://explorer.public.zkevm-test.net' },
        default: { name: 'zkEVMExplorer', url: 'https://explorer.public.zkevm-test.net' },
    },
}




