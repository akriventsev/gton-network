import { DeployConfig } from '../src/deploy-config'

const config: DeployConfig = {
  numDeployConfirmations: 1,
  gasPrice: 19_000_000_000,
  l1BlockTimeSeconds: 15,
  l2BlockGasLimit: 15_000_000,
  l2ChainId: 50021,
  ctcL2GasDiscountDivisor: 32,
  ctcEnqueueGasCost: 70_000,
  sccFaultProofWindowSeconds: 10,
  sccSequencerPublishWindowSeconds: 12592000,
  ovmSequencerAddress: '0xAFe4d2a5972651A9DBC8BC60213540CF70dBFD35',
  ovmProposerAddress: '0x35847a4bd5dD996b077900007b1ac0534f82ca88',
  ovmBlockSignerAddress: '0x68CCe680B6b1d4Bce7D5Da2cF6d3637A43312433',
  ovmFeeWalletAddress: '0xAFe4d2a5972651A9DBC8BC60213540CF70dBFD35',
  ovmAddressManagerOwner: '0x443b859f0306E33DCd7781F85aCD8342EE1BF599',
  ovmGasPriceOracleOwner: '0x16422fF909bf9eB0694F9D7Fb9342d4F9F9F343C',
}

export default config
