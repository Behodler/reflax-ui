import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AVault
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const aVaultAbi = [
  {
    type: 'function',
    inputs: [{ name: 'holder', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'config',
    outputs: [
      { name: 'inputToken', internalType: 'contract IERC20', type: 'address' },
      { name: 'flax', internalType: 'contract IERC20', type: 'address' },
      { name: 'sFlax', internalType: 'contract ISFlax', type: 'address' },
      {
        name: 'yieldSource',
        internalType: 'contract AYieldSource',
        type: 'address',
      },
      { name: 'booster', internalType: 'contract IBooster', type: 'address' },
      {
        name: 'teraVirtualInputPerSecond',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'oracle',
        internalType: 'contract StandardOracle',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newYieldSource', internalType: 'address', type: 'address' },
    ],
    name: 'migrateYieldSouce',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'flaxAddress', internalType: 'string', type: 'string' },
      { name: 'sFlaxAddress', internalType: 'string', type: 'string' },
      { name: 'yieldAddress', internalType: 'string', type: 'string' },
      { name: 'boosterAddress', internalType: 'string', type: 'string' },
      { name: 'TVIPS', internalType: 'uint256', type: 'uint256' },
      { name: 'oracleAddress', internalType: 'string', type: 'string' },
    ],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'caller', internalType: 'address', type: 'address' }],
    name: 'updateAccounting',
    outputs: [
      { name: 'unclaimedFlax', internalType: 'uint256', type: 'uint256' },
      {
        name: 'aggregateFlaxPerShare',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'withdrawUnaccountedForToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'staker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'inputTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'feeBasisPoints',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'inputDeposit',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Flax
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const flaxAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FlaxLocker
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const flaxLockerAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'vm', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'breakEmergencyGlass',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'claimant', internalType: 'address', type: 'address' }],
    name: 'claimFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'config',
    outputs: [
      { name: 'flax', internalType: 'contract IERC20', type: 'address' },
      {
        name: 'sFlaxEarning_baseline',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'sFlax', internalType: 'contract SFlax', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'durationInMonths', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'disable',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'booster', internalType: 'address', type: 'address' },
      { name: 'live', internalType: 'bool', type: 'bool' },
    ],
    name: 'setBooster',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'flax', internalType: 'address', type: 'address' },
      { name: 'sFlax', internalType: 'address', type: 'address' },
      {
        name: 'sFlaxEarning_baseline',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newLocker', internalType: 'address', type: 'address' }],
    name: 'transferToNewLocker',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'holder', internalType: 'address', type: 'address' }],
    name: 'unclaimedSFlax',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'userStakingInfo',
    outputs: [
      { name: 'timeRemaining', internalType: 'uint256', type: 'uint256' },
      { name: 'weight', internalType: 'uint256', type: 'uint256' },
      { name: 'lastUpdate', internalType: 'uint256', type: 'uint256' },
      { name: 'lockedFlax', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldSFlax',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newSFlax',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'SFlax_set',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SFlax
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const sFlaxAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'approvedBurners',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'holder', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'burner', internalType: 'address', type: 'address' },
      { name: 'canBurn', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovedBurner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StandardOracle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const standardOracleAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'V2Router', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pairAddress', internalType: 'address', type: 'address' },
      { name: 'period', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RegisterPair',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'WETH',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'tokenOut', internalType: 'address', type: 'address' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'consult',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      { name: '', internalType: 'contract IUniswapV2Factory', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
    ],
    name: 'getLastUpdate',
    outputs: [
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
      { name: 'consult_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'hintUpdate',
    outputs: [
      { name: 'consultResult', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'pairMeasurements',
    outputs: [
      {
        name: 'price0CumulativeLast',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'price1CumulativeLast',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'blockTimestampLast', internalType: 'uint32', type: 'uint32' },
      {
        name: 'price0Average',
        internalType: 'struct FixedPoint.uq112x112',
        type: 'tuple',
        components: [{ name: '_x', internalType: 'uint224', type: 'uint224' }],
      },
      {
        name: 'price1Average',
        internalType: 'struct FixedPoint.uq112x112',
        type: 'tuple',
        components: [{ name: '_x', internalType: 'uint224', type: 'uint224' }],
      },
      { name: 'period', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
    ],
    name: 'uniSort',
    outputs: [
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
      { name: 'consult_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'update',
    outputs: [
      { name: 'consultResult', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'pair', internalType: 'address', type: 'address' }],
    name: 'updatePair',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'error',
    inputs: [{ name: 'pair', internalType: 'address', type: 'address' }],
    name: 'AssetNotRegistered',
  },
  {
    type: 'error',
    inputs: [
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
    ],
    name: 'InvalidPair',
  },
  {
    type: 'error',
    inputs: [
      { name: 'pair', internalType: 'address', type: 'address' },
      { name: 'token', internalType: 'address', type: 'address' },
    ],
    name: 'InvalidToken',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'pair', internalType: 'address', type: 'address' },
      { name: 'reserve1', internalType: 'uint256', type: 'uint256' },
      { name: 'reserve2', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ReservesEmpty',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'tokenOut', internalType: 'address', type: 'address' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'UpdateOracle',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timeElapsed', internalType: 'uint256', type: 'uint256' },
      { name: 'period', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'WaitPeriodTooSmall',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USDC_v1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const usdcV1Abi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'inputTokenAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'holder', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'config',
    outputs: [
      { name: 'inputToken', internalType: 'contract IERC20', type: 'address' },
      { name: 'flax', internalType: 'contract IERC20', type: 'address' },
      { name: 'sFlax', internalType: 'contract ISFlax', type: 'address' },
      {
        name: 'yieldSource',
        internalType: 'contract AYieldSource',
        type: 'address',
      },
      { name: 'booster', internalType: 'contract IBooster', type: 'address' },
      {
        name: 'teraVirtualInputPerSecond',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'oracle',
        internalType: 'contract StandardOracle',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxStake',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newYieldSource', internalType: 'address', type: 'address' },
    ],
    name: 'migrateYieldSouce',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'flaxAddress', internalType: 'string', type: 'string' },
      { name: 'sFlaxAddress', internalType: 'string', type: 'string' },
      { name: 'yieldAddress', internalType: 'string', type: 'string' },
      { name: 'boosterAddress', internalType: 'string', type: 'string' },
      { name: 'TVIPS', internalType: 'uint256', type: 'uint256' },
      { name: 'oracleAddress', internalType: 'string', type: 'string' },
    ],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'max', internalType: 'uint256', type: 'uint256' }],
    name: 'setMaxStake',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'stake',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'caller', internalType: 'address', type: 'address' }],
    name: 'updateAccounting',
    outputs: [
      { name: 'unclaimedFlax', internalType: 'uint256', type: 'uint256' },
      {
        name: 'aggregateFlaxPerShare',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'allowImpermanentLoss', internalType: 'bool', type: 'bool' },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'withdrawUnaccountedForToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'staker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'inputTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'feeBasisPoints',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'inputDeposit',
  },
  {
    type: 'error',
    inputs: [{ name: 'reason', internalType: 'string', type: 'string' }],
    name: 'DepositProhibited',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USDe_USDx_ys
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const usDeUsDxYsAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'usdc', internalType: 'address', type: 'address' },
      { name: 'sushiswapV2Router', internalType: 'address', type: 'address' },
      { name: 'poolId', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'advanceYield',
    outputs: [
      {
        name: 'currentDepositBalance',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'approvals',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_open', internalType: 'uint256', type: 'uint256' },
      { name: '_inputToken', internalType: 'string', type: 'string' },
      { name: '_priceTilter', internalType: 'string', type: 'string' },
      { name: '_protocolName', internalType: 'string', type: 'string' },
      { name: 'vaultToDrop', internalType: 'string', type: 'string' },
      { name: 'vaultToApprove', internalType: 'string', type: 'string' },
    ],
    name: 'configure',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'staker', internalType: 'address', type: 'address' },
    ],
    name: 'deposit',
    outputs: [
      { name: 'depositFee', internalType: 'uint256', type: 'uint256' },
      { name: 'protocolUnits', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'protocolUnitsToWithdraw',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'allowImpermanentLoss', internalType: 'bool', type: 'bool' },
    ],
    name: 'releaseInput',
    outputs: [{ name: 'fee', internalType: 'int256', type: 'int256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'rewards',
    outputs: [
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'crv', internalType: 'address', type: 'address' }],
    name: 'setCRV',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'USDC_USDe', internalType: 'address', type: 'address' },
      { name: 'convexPool', internalType: 'address', type: 'address' },
      { name: 'USDe', internalType: 'address', type: 'address' },
    ],
    name: 'setCRVPools',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'booster', internalType: 'address', type: 'address' }],
    name: 'setConvex',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'underlyingProtocolName',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'assetBalanceAfter',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReleaseInputValues',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'actual',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'desired',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'actualVsDesiredUSDC',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tilt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'flaxValueOfPriceTilt',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'convexBalancsse',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'usdeVal',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'impliedUSDC',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'get_input_value_of_protocol_deposit_hook_EVENT',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'rewardR',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'ethR',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'rewardBal',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'reserveInSell',
  },
  {
    type: 'error',
    inputs: [{ name: 'rewardToken', internalType: 'address', type: 'address' }],
    name: 'EthPairNotInitialized',
  },
  { type: 'error', inputs: [], name: 'FundClosed' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aVaultAbi}__
 */
export const useReadAVault = /*#__PURE__*/ createUseReadContract({
  abi: aVaultAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadAVaultBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: aVaultAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"config"`
 */
export const useReadAVaultConfig = /*#__PURE__*/ createUseReadContract({
  abi: aVaultAbi,
  functionName: 'config',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"owner"`
 */
export const useReadAVaultOwner = /*#__PURE__*/ createUseReadContract({
  abi: aVaultAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadAVaultTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: aVaultAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aVaultAbi}__
 */
export const useWriteAVault = /*#__PURE__*/ createUseWriteContract({
  abi: aVaultAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"migrateYieldSouce"`
 */
export const useWriteAVaultMigrateYieldSouce =
  /*#__PURE__*/ createUseWriteContract({
    abi: aVaultAbi,
    functionName: 'migrateYieldSouce',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteAVaultRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: aVaultAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"setConfig"`
 */
export const useWriteAVaultSetConfig = /*#__PURE__*/ createUseWriteContract({
  abi: aVaultAbi,
  functionName: 'setConfig',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteAVaultTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: aVaultAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"updateAccounting"`
 */
export const useWriteAVaultUpdateAccounting =
  /*#__PURE__*/ createUseWriteContract({
    abi: aVaultAbi,
    functionName: 'updateAccounting',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"withdrawUnaccountedForToken"`
 */
export const useWriteAVaultWithdrawUnaccountedForToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: aVaultAbi,
    functionName: 'withdrawUnaccountedForToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aVaultAbi}__
 */
export const useSimulateAVault = /*#__PURE__*/ createUseSimulateContract({
  abi: aVaultAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"migrateYieldSouce"`
 */
export const useSimulateAVaultMigrateYieldSouce =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aVaultAbi,
    functionName: 'migrateYieldSouce',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateAVaultRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aVaultAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"setConfig"`
 */
export const useSimulateAVaultSetConfig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aVaultAbi,
    functionName: 'setConfig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateAVaultTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aVaultAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"updateAccounting"`
 */
export const useSimulateAVaultUpdateAccounting =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aVaultAbi,
    functionName: 'updateAccounting',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aVaultAbi}__ and `functionName` set to `"withdrawUnaccountedForToken"`
 */
export const useSimulateAVaultWithdrawUnaccountedForToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aVaultAbi,
    functionName: 'withdrawUnaccountedForToken',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aVaultAbi}__
 */
export const useWatchAVaultEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: aVaultAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aVaultAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchAVaultOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aVaultAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aVaultAbi}__ and `eventName` set to `"inputDeposit"`
 */
export const useWatchAVaultInputDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aVaultAbi,
    eventName: 'inputDeposit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flaxAbi}__
 */
export const useReadFlax = /*#__PURE__*/ createUseReadContract({ abi: flaxAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flaxAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadFlaxAllowance = /*#__PURE__*/ createUseReadContract({
  abi: flaxAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flaxAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadFlaxBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: flaxAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flaxAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadFlaxDecimals = /*#__PURE__*/ createUseReadContract({
  abi: flaxAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flaxAbi}__ and `functionName` set to `"name"`
 */
export const useReadFlaxName = /*#__PURE__*/ createUseReadContract({
  abi: flaxAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flaxAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadFlaxSymbol = /*#__PURE__*/ createUseReadContract({
  abi: flaxAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flaxAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadFlaxTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: flaxAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxAbi}__
 */
export const useWriteFlax = /*#__PURE__*/ createUseWriteContract({
  abi: flaxAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteFlaxApprove = /*#__PURE__*/ createUseWriteContract({
  abi: flaxAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteFlaxBurn = /*#__PURE__*/ createUseWriteContract({
  abi: flaxAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteFlaxTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: flaxAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteFlaxTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: flaxAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxAbi}__
 */
export const useSimulateFlax = /*#__PURE__*/ createUseSimulateContract({
  abi: flaxAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateFlaxApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: flaxAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateFlaxBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: flaxAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateFlaxTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: flaxAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateFlaxTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flaxAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link flaxAbi}__
 */
export const useWatchFlaxEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: flaxAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link flaxAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchFlaxApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: flaxAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link flaxAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchFlaxTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: flaxAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flaxLockerAbi}__
 */
export const useReadFlaxLocker = /*#__PURE__*/ createUseReadContract({
  abi: flaxLockerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"config"`
 */
export const useReadFlaxLockerConfig = /*#__PURE__*/ createUseReadContract({
  abi: flaxLockerAbi,
  functionName: 'config',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"owner"`
 */
export const useReadFlaxLockerOwner = /*#__PURE__*/ createUseReadContract({
  abi: flaxLockerAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"unclaimedSFlax"`
 */
export const useReadFlaxLockerUnclaimedSFlax =
  /*#__PURE__*/ createUseReadContract({
    abi: flaxLockerAbi,
    functionName: 'unclaimedSFlax',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"userStakingInfo"`
 */
export const useReadFlaxLockerUserStakingInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: flaxLockerAbi,
    functionName: 'userStakingInfo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxLockerAbi}__
 */
export const useWriteFlaxLocker = /*#__PURE__*/ createUseWriteContract({
  abi: flaxLockerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"breakEmergencyGlass"`
 */
export const useWriteFlaxLockerBreakEmergencyGlass =
  /*#__PURE__*/ createUseWriteContract({
    abi: flaxLockerAbi,
    functionName: 'breakEmergencyGlass',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"claimFor"`
 */
export const useWriteFlaxLockerClaimFor = /*#__PURE__*/ createUseWriteContract({
  abi: flaxLockerAbi,
  functionName: 'claimFor',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"deposit"`
 */
export const useWriteFlaxLockerDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: flaxLockerAbi,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"disable"`
 */
export const useWriteFlaxLockerDisable = /*#__PURE__*/ createUseWriteContract({
  abi: flaxLockerAbi,
  functionName: 'disable',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteFlaxLockerRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: flaxLockerAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"setBooster"`
 */
export const useWriteFlaxLockerSetBooster =
  /*#__PURE__*/ createUseWriteContract({
    abi: flaxLockerAbi,
    functionName: 'setBooster',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"setConfig"`
 */
export const useWriteFlaxLockerSetConfig = /*#__PURE__*/ createUseWriteContract(
  { abi: flaxLockerAbi, functionName: 'setConfig' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteFlaxLockerTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: flaxLockerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"transferToNewLocker"`
 */
export const useWriteFlaxLockerTransferToNewLocker =
  /*#__PURE__*/ createUseWriteContract({
    abi: flaxLockerAbi,
    functionName: 'transferToNewLocker',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteFlaxLockerWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: flaxLockerAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxLockerAbi}__
 */
export const useSimulateFlaxLocker = /*#__PURE__*/ createUseSimulateContract({
  abi: flaxLockerAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"breakEmergencyGlass"`
 */
export const useSimulateFlaxLockerBreakEmergencyGlass =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flaxLockerAbi,
    functionName: 'breakEmergencyGlass',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"claimFor"`
 */
export const useSimulateFlaxLockerClaimFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flaxLockerAbi,
    functionName: 'claimFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulateFlaxLockerDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flaxLockerAbi,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"disable"`
 */
export const useSimulateFlaxLockerDisable =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flaxLockerAbi,
    functionName: 'disable',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateFlaxLockerRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flaxLockerAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"setBooster"`
 */
export const useSimulateFlaxLockerSetBooster =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flaxLockerAbi,
    functionName: 'setBooster',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"setConfig"`
 */
export const useSimulateFlaxLockerSetConfig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flaxLockerAbi,
    functionName: 'setConfig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateFlaxLockerTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flaxLockerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"transferToNewLocker"`
 */
export const useSimulateFlaxLockerTransferToNewLocker =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flaxLockerAbi,
    functionName: 'transferToNewLocker',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flaxLockerAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateFlaxLockerWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flaxLockerAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link flaxLockerAbi}__
 */
export const useWatchFlaxLockerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: flaxLockerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link flaxLockerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchFlaxLockerOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: flaxLockerAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link flaxLockerAbi}__ and `eventName` set to `"SFlax_set"`
 */
export const useWatchFlaxLockerSFlaxSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: flaxLockerAbi,
    eventName: 'SFlax_set',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sFlaxAbi}__
 */
export const useReadSFlax = /*#__PURE__*/ createUseReadContract({
  abi: sFlaxAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadSFlaxAllowance = /*#__PURE__*/ createUseReadContract({
  abi: sFlaxAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"approvedBurners"`
 */
export const useReadSFlaxApprovedBurners = /*#__PURE__*/ createUseReadContract({
  abi: sFlaxAbi,
  functionName: 'approvedBurners',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadSFlaxBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: sFlaxAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadSFlaxDecimals = /*#__PURE__*/ createUseReadContract({
  abi: sFlaxAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"name"`
 */
export const useReadSFlaxName = /*#__PURE__*/ createUseReadContract({
  abi: sFlaxAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"owner"`
 */
export const useReadSFlaxOwner = /*#__PURE__*/ createUseReadContract({
  abi: sFlaxAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadSFlaxSymbol = /*#__PURE__*/ createUseReadContract({
  abi: sFlaxAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadSFlaxTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: sFlaxAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sFlaxAbi}__
 */
export const useWriteSFlax = /*#__PURE__*/ createUseWriteContract({
  abi: sFlaxAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteSFlaxApprove = /*#__PURE__*/ createUseWriteContract({
  abi: sFlaxAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteSFlaxBurn = /*#__PURE__*/ createUseWriteContract({
  abi: sFlaxAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useWriteSFlaxBurnFrom = /*#__PURE__*/ createUseWriteContract({
  abi: sFlaxAbi,
  functionName: 'burnFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteSFlaxMint = /*#__PURE__*/ createUseWriteContract({
  abi: sFlaxAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteSFlaxRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: sFlaxAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"setApprovedBurner"`
 */
export const useWriteSFlaxSetApprovedBurner =
  /*#__PURE__*/ createUseWriteContract({
    abi: sFlaxAbi,
    functionName: 'setApprovedBurner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteSFlaxTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: sFlaxAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteSFlaxTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: sFlaxAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteSFlaxTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: sFlaxAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sFlaxAbi}__
 */
export const useSimulateSFlax = /*#__PURE__*/ createUseSimulateContract({
  abi: sFlaxAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateSFlaxApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: sFlaxAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateSFlaxBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: sFlaxAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useSimulateSFlaxBurnFrom = /*#__PURE__*/ createUseSimulateContract(
  { abi: sFlaxAbi, functionName: 'burnFrom' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateSFlaxMint = /*#__PURE__*/ createUseSimulateContract({
  abi: sFlaxAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateSFlaxRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: sFlaxAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"setApprovedBurner"`
 */
export const useSimulateSFlaxSetApprovedBurner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: sFlaxAbi,
    functionName: 'setApprovedBurner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateSFlaxTransfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: sFlaxAbi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateSFlaxTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: sFlaxAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sFlaxAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateSFlaxTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: sFlaxAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link sFlaxAbi}__
 */
export const useWatchSFlaxEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: sFlaxAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link sFlaxAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchSFlaxApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: sFlaxAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link sFlaxAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchSFlaxOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: sFlaxAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link sFlaxAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchSFlaxTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: sFlaxAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardOracleAbi}__
 */
export const useReadStandardOracle = /*#__PURE__*/ createUseReadContract({
  abi: standardOracleAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"WETH"`
 */
export const useReadStandardOracleWeth = /*#__PURE__*/ createUseReadContract({
  abi: standardOracleAbi,
  functionName: 'WETH',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"consult"`
 */
export const useReadStandardOracleConsult = /*#__PURE__*/ createUseReadContract(
  { abi: standardOracleAbi, functionName: 'consult' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"factory"`
 */
export const useReadStandardOracleFactory = /*#__PURE__*/ createUseReadContract(
  { abi: standardOracleAbi, functionName: 'factory' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"getLastUpdate"`
 */
export const useReadStandardOracleGetLastUpdate =
  /*#__PURE__*/ createUseReadContract({
    abi: standardOracleAbi,
    functionName: 'getLastUpdate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"owner"`
 */
export const useReadStandardOracleOwner = /*#__PURE__*/ createUseReadContract({
  abi: standardOracleAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"pairMeasurements"`
 */
export const useReadStandardOraclePairMeasurements =
  /*#__PURE__*/ createUseReadContract({
    abi: standardOracleAbi,
    functionName: 'pairMeasurements',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"uniSort"`
 */
export const useReadStandardOracleUniSort = /*#__PURE__*/ createUseReadContract(
  { abi: standardOracleAbi, functionName: 'uniSort' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardOracleAbi}__
 */
export const useWriteStandardOracle = /*#__PURE__*/ createUseWriteContract({
  abi: standardOracleAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"RegisterPair"`
 */
export const useWriteStandardOracleRegisterPair =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardOracleAbi,
    functionName: 'RegisterPair',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"hintUpdate"`
 */
export const useWriteStandardOracleHintUpdate =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardOracleAbi,
    functionName: 'hintUpdate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteStandardOracleRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardOracleAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteStandardOracleTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardOracleAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"update"`
 */
export const useWriteStandardOracleUpdate =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardOracleAbi,
    functionName: 'update',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"updatePair"`
 */
export const useWriteStandardOracleUpdatePair =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardOracleAbi,
    functionName: 'updatePair',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardOracleAbi}__
 */
export const useSimulateStandardOracle =
  /*#__PURE__*/ createUseSimulateContract({ abi: standardOracleAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"RegisterPair"`
 */
export const useSimulateStandardOracleRegisterPair =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardOracleAbi,
    functionName: 'RegisterPair',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"hintUpdate"`
 */
export const useSimulateStandardOracleHintUpdate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardOracleAbi,
    functionName: 'hintUpdate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateStandardOracleRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardOracleAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateStandardOracleTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardOracleAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"update"`
 */
export const useSimulateStandardOracleUpdate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardOracleAbi,
    functionName: 'update',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardOracleAbi}__ and `functionName` set to `"updatePair"`
 */
export const useSimulateStandardOracleUpdatePair =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardOracleAbi,
    functionName: 'updatePair',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link standardOracleAbi}__
 */
export const useWatchStandardOracleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: standardOracleAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link standardOracleAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchStandardOracleOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: standardOracleAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcV1Abi}__
 */
export const useReadUsdcV1 = /*#__PURE__*/ createUseReadContract({
  abi: usdcV1Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadUsdcV1BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: usdcV1Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"config"`
 */
export const useReadUsdcV1Config = /*#__PURE__*/ createUseReadContract({
  abi: usdcV1Abi,
  functionName: 'config',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"maxStake"`
 */
export const useReadUsdcV1MaxStake = /*#__PURE__*/ createUseReadContract({
  abi: usdcV1Abi,
  functionName: 'maxStake',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"owner"`
 */
export const useReadUsdcV1Owner = /*#__PURE__*/ createUseReadContract({
  abi: usdcV1Abi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadUsdcV1TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: usdcV1Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcV1Abi}__
 */
export const useWriteUsdcV1 = /*#__PURE__*/ createUseWriteContract({
  abi: usdcV1Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"claim"`
 */
export const useWriteUsdcV1Claim = /*#__PURE__*/ createUseWriteContract({
  abi: usdcV1Abi,
  functionName: 'claim',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"migrateYieldSouce"`
 */
export const useWriteUsdcV1MigrateYieldSouce =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcV1Abi,
    functionName: 'migrateYieldSouce',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteUsdcV1RenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcV1Abi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"setConfig"`
 */
export const useWriteUsdcV1SetConfig = /*#__PURE__*/ createUseWriteContract({
  abi: usdcV1Abi,
  functionName: 'setConfig',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"setMaxStake"`
 */
export const useWriteUsdcV1SetMaxStake = /*#__PURE__*/ createUseWriteContract({
  abi: usdcV1Abi,
  functionName: 'setMaxStake',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"stake"`
 */
export const useWriteUsdcV1Stake = /*#__PURE__*/ createUseWriteContract({
  abi: usdcV1Abi,
  functionName: 'stake',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteUsdcV1TransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcV1Abi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"updateAccounting"`
 */
export const useWriteUsdcV1UpdateAccounting =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcV1Abi,
    functionName: 'updateAccounting',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteUsdcV1Withdraw = /*#__PURE__*/ createUseWriteContract({
  abi: usdcV1Abi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"withdrawUnaccountedForToken"`
 */
export const useWriteUsdcV1WithdrawUnaccountedForToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcV1Abi,
    functionName: 'withdrawUnaccountedForToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcV1Abi}__
 */
export const useSimulateUsdcV1 = /*#__PURE__*/ createUseSimulateContract({
  abi: usdcV1Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"claim"`
 */
export const useSimulateUsdcV1Claim = /*#__PURE__*/ createUseSimulateContract({
  abi: usdcV1Abi,
  functionName: 'claim',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"migrateYieldSouce"`
 */
export const useSimulateUsdcV1MigrateYieldSouce =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcV1Abi,
    functionName: 'migrateYieldSouce',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateUsdcV1RenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcV1Abi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"setConfig"`
 */
export const useSimulateUsdcV1SetConfig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcV1Abi,
    functionName: 'setConfig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"setMaxStake"`
 */
export const useSimulateUsdcV1SetMaxStake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcV1Abi,
    functionName: 'setMaxStake',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"stake"`
 */
export const useSimulateUsdcV1Stake = /*#__PURE__*/ createUseSimulateContract({
  abi: usdcV1Abi,
  functionName: 'stake',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateUsdcV1TransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcV1Abi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"updateAccounting"`
 */
export const useSimulateUsdcV1UpdateAccounting =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcV1Abi,
    functionName: 'updateAccounting',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateUsdcV1Withdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcV1Abi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcV1Abi}__ and `functionName` set to `"withdrawUnaccountedForToken"`
 */
export const useSimulateUsdcV1WithdrawUnaccountedForToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcV1Abi,
    functionName: 'withdrawUnaccountedForToken',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcV1Abi}__
 */
export const useWatchUsdcV1Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: usdcV1Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcV1Abi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchUsdcV1OwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcV1Abi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcV1Abi}__ and `eventName` set to `"inputDeposit"`
 */
export const useWatchUsdcV1InputDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcV1Abi,
    eventName: 'inputDeposit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__
 */
export const useReadUsDeUsDxYs = /*#__PURE__*/ createUseReadContract({
  abi: usDeUsDxYsAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"owner"`
 */
export const useReadUsDeUsDxYsOwner = /*#__PURE__*/ createUseReadContract({
  abi: usDeUsDxYsAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"rewards"`
 */
export const useReadUsDeUsDxYsRewards = /*#__PURE__*/ createUseReadContract({
  abi: usDeUsDxYsAbi,
  functionName: 'rewards',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"underlyingProtocolName"`
 */
export const useReadUsDeUsDxYsUnderlyingProtocolName =
  /*#__PURE__*/ createUseReadContract({
    abi: usDeUsDxYsAbi,
    functionName: 'underlyingProtocolName',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__
 */
export const useWriteUsDeUsDxYs = /*#__PURE__*/ createUseWriteContract({
  abi: usDeUsDxYsAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"advanceYield"`
 */
export const useWriteUsDeUsDxYsAdvanceYield =
  /*#__PURE__*/ createUseWriteContract({
    abi: usDeUsDxYsAbi,
    functionName: 'advanceYield',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"approvals"`
 */
export const useWriteUsDeUsDxYsApprovals = /*#__PURE__*/ createUseWriteContract(
  { abi: usDeUsDxYsAbi, functionName: 'approvals' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"configure"`
 */
export const useWriteUsDeUsDxYsConfigure = /*#__PURE__*/ createUseWriteContract(
  { abi: usDeUsDxYsAbi, functionName: 'configure' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"deposit"`
 */
export const useWriteUsDeUsDxYsDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: usDeUsDxYsAbi,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"releaseInput"`
 */
export const useWriteUsDeUsDxYsReleaseInput =
  /*#__PURE__*/ createUseWriteContract({
    abi: usDeUsDxYsAbi,
    functionName: 'releaseInput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteUsDeUsDxYsRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: usDeUsDxYsAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"setCRV"`
 */
export const useWriteUsDeUsDxYsSetCrv = /*#__PURE__*/ createUseWriteContract({
  abi: usDeUsDxYsAbi,
  functionName: 'setCRV',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"setCRVPools"`
 */
export const useWriteUsDeUsDxYsSetCrvPools =
  /*#__PURE__*/ createUseWriteContract({
    abi: usDeUsDxYsAbi,
    functionName: 'setCRVPools',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"setConvex"`
 */
export const useWriteUsDeUsDxYsSetConvex = /*#__PURE__*/ createUseWriteContract(
  { abi: usDeUsDxYsAbi, functionName: 'setConvex' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteUsDeUsDxYsTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: usDeUsDxYsAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__
 */
export const useSimulateUsDeUsDxYs = /*#__PURE__*/ createUseSimulateContract({
  abi: usDeUsDxYsAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"advanceYield"`
 */
export const useSimulateUsDeUsDxYsAdvanceYield =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usDeUsDxYsAbi,
    functionName: 'advanceYield',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"approvals"`
 */
export const useSimulateUsDeUsDxYsApprovals =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usDeUsDxYsAbi,
    functionName: 'approvals',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"configure"`
 */
export const useSimulateUsDeUsDxYsConfigure =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usDeUsDxYsAbi,
    functionName: 'configure',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulateUsDeUsDxYsDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usDeUsDxYsAbi,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"releaseInput"`
 */
export const useSimulateUsDeUsDxYsReleaseInput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usDeUsDxYsAbi,
    functionName: 'releaseInput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateUsDeUsDxYsRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usDeUsDxYsAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"setCRV"`
 */
export const useSimulateUsDeUsDxYsSetCrv =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usDeUsDxYsAbi,
    functionName: 'setCRV',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"setCRVPools"`
 */
export const useSimulateUsDeUsDxYsSetCrvPools =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usDeUsDxYsAbi,
    functionName: 'setCRVPools',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"setConvex"`
 */
export const useSimulateUsDeUsDxYsSetConvex =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usDeUsDxYsAbi,
    functionName: 'setConvex',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateUsDeUsDxYsTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usDeUsDxYsAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usDeUsDxYsAbi}__
 */
export const useWatchUsDeUsDxYsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: usDeUsDxYsAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchUsDeUsDxYsOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usDeUsDxYsAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `eventName` set to `"ReleaseInputValues"`
 */
export const useWatchUsDeUsDxYsReleaseInputValuesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usDeUsDxYsAbi,
    eventName: 'ReleaseInputValues',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `eventName` set to `"actualVsDesiredUSDC"`
 */
export const useWatchUsDeUsDxYsActualVsDesiredUsdcEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usDeUsDxYsAbi,
    eventName: 'actualVsDesiredUSDC',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `eventName` set to `"flaxValueOfPriceTilt"`
 */
export const useWatchUsDeUsDxYsFlaxValueOfPriceTiltEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usDeUsDxYsAbi,
    eventName: 'flaxValueOfPriceTilt',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `eventName` set to `"get_input_value_of_protocol_deposit_hook_EVENT"`
 */
export const useWatchUsDeUsDxYsGetInputValueOfProtocolDepositHookEventEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usDeUsDxYsAbi,
    eventName: 'get_input_value_of_protocol_deposit_hook_EVENT',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usDeUsDxYsAbi}__ and `eventName` set to `"reserveInSell"`
 */
export const useWatchUsDeUsDxYsReserveInSellEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usDeUsDxYsAbi,
    eventName: 'reserveInSell',
  })
