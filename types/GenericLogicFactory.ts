/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { GenericLogic } from "./GenericLogic";

export class GenericLogicFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<GenericLogic> {
    return super.deploy(overrides) as Promise<GenericLogic>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): GenericLogic {
    return super.attach(address) as GenericLogic;
  }
  connect(signer: Signer): GenericLogicFactory {
    return super.connect(signer) as GenericLogicFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GenericLogic {
    return new Contract(address, _abi, signerOrProvider) as GenericLogic;
  }
}

const _abi = [
  {
    inputs: [],
    name: "HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "collateralBalanceETH",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "borrowBalanceETH",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "totalFeesETH",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "ltv",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_feeProvider",
        type: "address"
      }
    ],
    name: "calculateAvailableBorrowsETH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x61115c610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c806392eeb05c1461005b578063ab8bb39314610158578063c3525c28146101a8578063daae7055146101b0575b600080fd5b610125600480360360a081101561007157600080fd5b6001600160a01b0382351691602081013591604082013591908101906080810160608201356401000000008111156100a857600080fd5b8201836020820111156100ba57600080fd5b803590602001918460208302840111640100000000831117156100dc57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550505090356001600160a01b031691506102699050565b604080519687526020870195909552858501939093526060850191909152608084015260a0830152519081900360c00190f35b610196600480360360a081101561016e57600080fd5b50803590602081013590604081013590606081013590608001356001600160a01b0316610871565b60408051918252519081900360200190f35b61019661095c565b610255600480360360e08110156101c657600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a082013564010000000081111561020d57600080fd5b82018360208201111561021f57600080fd5b8035906020019184602083028401116401000000008311171561024157600080fd5b9193509150356001600160a01b0316610968565b604080519115158252519081900360200190f35b60008060008060008061027a611008565b60006101008201525b885181610100015110156107a95788816101000151815181106102a257fe5b60200260200101518161020001906001600160a01b031690816001600160a01b03168152505060008b60008361020001516001600160a01b03166001600160a01b0316815260200190815260200160002090508060090160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561036257600080fd5b505afa158015610376573d6000803e3d6000fd5b505050506040513d602081101561038c57600080fd5b810190808051906020019092919050505082604001818152505080600a0160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561041357600080fd5b505afa158015610427573d6000803e3d6000fd5b505050506040513d602081101561043d57600080fd5b810190808051906020019092919050505082606001818152505061050481600b0160009054906101000a90046001600160a01b03166001600160a01b03166370a082318f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156104c757600080fd5b505afa1580156104db573d6000803e3d6000fd5b505050506040513d60208110156104f157600080fd5b505160608401519063ffffffff610bbd16565b6060830152604082015115801561051d57506060820151155b156105285750610798565b8060080154600a0a826020018181525050886001600160a01b031663b3596f078b8461010001518151811061055957fe5b60200260200101516040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156105a757600080fd5b505afa1580156105bb573d6000803e3d6000fd5b505050506040513d60208110156105d157600080fd5b50518252604082015115610710576000610610836020015161060485604001518660000151610c2090919063ffffffff16565b9063ffffffff610c7916565b600c830154909150600160d01b900460ff16801561068857508b60008f6001600160a01b03166001600160a01b0316815260200190815260200160002060008c8561010001518151811061066057fe5b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff165b1561070e576101408301516106a3908263ffffffff610bbd16565b61014084015260058201546106d5906106c390839063ffffffff610c2016565b6101a08501519063ffffffff610bbd16565b6101a08401526006820154610707906106f590839063ffffffff610c2016565b6101c08501519063ffffffff610bbd16565b6101c08401525b505b60608201511561079657610752610740836020015161060485606001518660000151610c2090919063ffffffff16565b6101608401519063ffffffff610bbd16565b6101608301526020820151825160e084015161078f9261077d9290916106049163ffffffff610c2016565b6101808401519063ffffffff610bbd16565b6101808301525b505b610100810180516001019052610283565b6000816101400151116107bd5760006107d8565b6101408101516101a08201516107d89163ffffffff610c7916565b6101a08201526101408101516107ef57600061080a565b6101408101516101c082015161080a9163ffffffff610c7916565b6101c0820181905261014082015161016083015161018084015161082d93610cbb565b61012082018190526101408201516101608301516101808401516101a08501516101c090950151929a50909850965091945090925090509550955095509550955095565b6000806108896064610604898763ffffffff610c2016565b90508581101561089d576000915050610953565b6108bd6108b0878763ffffffff610bbd16565b829063ffffffff610d4916565b60408051630e563a7d60e41b81523360048201526024810183905290519192506000916001600160a01b0386169163e563a7d0916044808301926020929190829003018186803b15801561091057600080fd5b505afa158015610924573d6000803e3d6000fd5b505050506040513d602081101561093a57600080fd5b5051905061094e828263ffffffff610d4916565b925050505b95945050505050565b670de0b6b3a764000081565b60006109726110a9565b6001600160a01b038a166000908152602088905260409020600c0154600160d01b900460ff1615806109c857506001600160a01b03808a16600090815260208881526040808320938e168352929052205460ff16155b156109d7576001915050610bb1565b610a188988888888808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508a9250610269915050565b506080860152506060840152604083018190526020830191909152610a41576001915050610bb1565b610b018760008c6001600160a01b03166001600160a01b0316815260200190815260200160002060080154600a0a6106048a866001600160a01b031663b3596f078f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610ac957600080fd5b505afa158015610add573d6000803e3d6000fd5b505050506040513d6020811015610af357600080fd5b50519063ffffffff610c2016565b60c082018190526020820151610b1c9163ffffffff610d4916565b60e08201819052610b31576000915050610bb1565b610b7c8160e00151610604610b578460a001518560c00151610c2090919063ffffffff16565b60808501516020860151610b709163ffffffff610c2016565b9063ffffffff610d4916565b610100820181905260e082015160408301516060840151600093610ba293929190610cbb565b670de0b6b3a764000010925050505b98975050505050505050565b600082820183811015610c17576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b600082610c2f57506000610c1a565b82820282848281610c3c57fe5b0414610c175760405162461bcd60e51b81526004018080602001828103825260218152602001806111066021913960400191505060405180910390fd5b6000610c1783836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610d8b565b6000610cfc6040518060400160405280601881526020017f426f72726f772062616c616e636520455448206973202573000000000000000081525085610e2d565b83610d0a5750600019610d41565b610d3e610d1d858563ffffffff610bbd16565b610d326064610604898763ffffffff610c2016565b9063ffffffff610f8216565b90505b949350505050565b6000610c1783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610fae565b60008183610e175760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ddc578181015183820152602001610dc4565b50505050905090810190601f168015610e095780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610e2357fe5b0495945050505050565b60006a636f6e736f6c652e6c6f676001600160a01b031683836040516024018080602001838152602001828103825284818151815260200191508051906020019080838360005b83811015610e8c578181015183820152602001610e74565b50505050905090810190601f168015610eb95780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166309710a9d60e41b17815290518251929650945084935091508083835b60208310610f155780518252601f199092019160209182019101610ef6565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114610f75576040519150601f19603f3d011682016040523d82523d6000602084013e610f7a565b606091505b505050505050565b600060028204610d4183610604610fa187670de0b6b3a7640000610c20565b849063ffffffff610bbd16565b600081848411156110005760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610ddc578181015183820152602001610dc4565b505050900390565b60405180610260016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160006001600160a01b031681526020016000151581526020016000151581525090565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600015158152509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220ee82441dde0043035e53d748331562cd740c07a24eee9a400369b975ae50eb1464736f6c63430006080033";
