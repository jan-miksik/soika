import AccountCard from '@/components/AccountCard'
import AccountPicker from '@/components/AccountPicker'
import PageHeader from '@/components/PageHeader'
import { COSMOS_MAINNET_CHAINS } from '@/data/COSMOSData'
import { EIP155_MAINNET_CHAINS, EIP155_TEST_CHAINS } from '@/data/EIP155Data'
import { SOLANA_MAINNET_CHAINS, SOLANA_TEST_CHAINS } from '@/data/SolanaData'
import { POLKADOT_MAINNET_CHAINS, POLKADOT_TEST_CHAINS } from '@/data/PolkadotData'
import { ELROND_MAINNET_CHAINS, ELROND_TEST_CHAINS } from '@/data/ElrondData'
import SettingsStore from '@/store/SettingsStore'
import { Text } from '@nextui-org/react'
import { Fragment } from 'react'
import { useSnapshot } from 'valtio'
import { NEAR_TEST_CHAINS } from '@/data/NEARData'

export default function HomePage() {
  const {
    testNets,
    eip155Address,
    cosmosAddress,
    solanaAddress,
    polkadotAddress,
    nearAddress,
    elrondAddress
  } = useSnapshot(SettingsStore.state)

  return (
    <Fragment>
      <PageHeader title="Accounts">
        <AccountPicker />
      </PageHeader>
      <Text h4 css={{ marginBottom: '$5' }}>
        Mainnets
      </Text>
      {Object.values(EIP155_MAINNET_CHAINS).map(({ name, logo, rgb }) => (
        <AccountCard key={name} name={name} logo={logo} rgb={rgb} address={eip155Address} />
      ))}
      {/* {Object.values(COSMOS_MAINNET_CHAINS).map(({ name, logo, rgb }) => (
        <AccountCard key={name} name={name} logo={logo} rgb={rgb} address={cosmosAddress} />
      ))}
      {Object.values(SOLANA_MAINNET_CHAINS).map(({ name, logo, rgb }) => (
        <AccountCard key={name} name={name} logo={logo} rgb={rgb} address={solanaAddress} />
      ))}
      {Object.values(POLKADOT_MAINNET_CHAINS).map(({ name, logo, rgb }) => (
        <AccountCard key={name} name={name} logo={logo} rgb={rgb} address={polkadotAddress} />
      ))}
      {Object.values(ELROND_MAINNET_CHAINS).map(({ name, logo, rgb }) => (
        <AccountCard key={name} name={name} logo={logo} rgb={rgb} address={elrondAddress} />
      ))} */}

      {testNets ? (
        <Fragment>
          <Text h4 css={{ marginBottom: '$5' }}>
            Testnets
          </Text>
          {Object.values(EIP155_TEST_CHAINS).map(({ name, logo, rgb }) => (
            <AccountCard key={name} name={name} logo={logo} rgb={rgb} address={eip155Address} />
          ))}
          {/* {Object.values(SOLANA_TEST_CHAINS).map(({ name, logo, rgb }) => (
            <AccountCard key={name} name={name} logo={logo} rgb={rgb} address={solanaAddress} />
          ))}
          {Object.values(POLKADOT_TEST_CHAINS).map(({ name, logo, rgb }) => (
            <AccountCard key={name} name={name} logo={logo} rgb={rgb} address={polkadotAddress} />
          ))}
          {Object.values(NEAR_TEST_CHAINS).map(({ name, logo, rgb }) => (
            <AccountCard key={name} name={name} logo={logo} rgb={rgb} address={nearAddress} />
          ))}
          {Object.values(ELROND_TEST_CHAINS).map(({ name, logo, rgb }) => (
            <AccountCard key={name} name={name} logo={logo} rgb={rgb} address={elrondAddress} />
          ))} */}
        </Fragment>
      ) : null}
    </Fragment>
  )
}

// import { parseUri } from '@walletconnect/utils'
// import PageHeader from '@/components/PageHeader'
// import QrReader from '@/components/QrReader'
// import { signClient } from '@/utils/WalletConnectUtil'
// import { createLegacySignClient } from '@/utils/LegacyWalletConnectUtil'
// import { Button, Input, Loading, Text } from '@nextui-org/react'
// import { Fragment, useState } from 'react'

// export default function WalletConnectPage() {
//   const [uri, setUri] = useState('')
//   const [loading, setLoading] = useState(false)

//   async function onConnect(uri: string) {
//     try {
//       setLoading(true)
//       const { version } = parseUri(uri)

//       // Route the provided URI to the v1 SignClient if URI version indicates it, else use v2.
//       if (version === 1) {
//         createLegacySignClient({ uri })
//       } else {
//         await signClient.pair({ uri })
//       }
//     } catch (err: unknown) {
//       alert(err)
//     } finally {
//       setUri('')
//       setLoading(false)
//     }
//   }

//   return (
//     <Fragment>
//       <PageHeader title="Soika" />

//       <QrReader onConnect={onConnect} />

//       <Text size={13} css={{ textAlign: 'center', marginTop: '$10', marginBottom: '$10' }}>
//         or use walletconnect uri
//       </Text>

//       <Input
//         css={{ width: '100%' }}
//         bordered
//         aria-label="wc url connect input"
//         placeholder="e.g. wc:a281567bb3e4..."
//         onChange={e => setUri(e.target.value)}
//         value={uri}
//         contentRight={
//           <Button
//             size="xs"
//             disabled={!uri}
//             css={{ marginLeft: -60 }}
//             onClick={() => onConnect(uri)}
//             color="gradient"
//           >
//             {loading ? <Loading size="sm" /> : 'Connect'}
//           </Button>
//         }
//       />
//     </Fragment>
//   )
// }

