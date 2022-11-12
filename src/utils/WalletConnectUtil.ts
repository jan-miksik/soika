// import SignClient from '@walletconnect/sign-client'

// export let signClient: SignClient

// export async function createSignClient(relayerRegionURL: string) {
//   signClient = await SignClient.init({
//     logger: 'debug',
//     projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//     relayUrl: relayerRegionURL ?? process.env.NEXT_PUBLIC_RELAY_URL,
//     metadata: {
//       name: 'React Wallet',
//       description: 'React Wallet for WalletConnect',
//       url: 'https://soika.vercel.app/',
//       icons: ['hcreateSignClientttps://avatars.githubusercontent.com/u/37784886']
//     }
//   })
// }

// 

export let signClient: SignClient

import SignClient from "@walletconnect/sign-client";
export async function createSignClient() {
  signClient = await SignClient.init({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  });
} 