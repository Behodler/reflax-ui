export type unsettableAddress = `0x${string}` | "UNSET";
export type address = `0x${string}` | undefined;
export interface ContractAddresses_unsettable {
    USDC: unsettableAddress;
    USDe: unsettableAddress;
    USDx: unsettableAddress;
    Flax: unsettableAddress;
    SFlax: unsettableAddress;
    FlaxLocker:unsettableAddress;
    USDe_USDx_crv: unsettableAddress;
    USDC_USDe_crv: unsettableAddress;
    convexPool: unsettableAddress;
    convexBooster: unsettableAddress;
    vault: unsettableAddress;
    yieldSource: unsettableAddress;
    oracle: unsettableAddress;
    refPair: unsettableAddress; // FLX/Weth
    rewardPairAddress: unsettableAddress; // Crv/Weth
    boosterV1: unsettableAddress;
  }

export interface ConstractAddresses_nullable {
  USDC: address;
  USDe: address;
  USDx: address;
  Flax: address;
  SFlax: address;
  FlaxLocker:address;
  USDe_USDx_crv: address;
  USDC_USDe_crv: address;
  convexPool: address;
  convexBooster: address;
  vault: address;
  yieldSource: address;
  oracle: address;
  refPair: address; // FLX/Weth
  rewardPairAddress: address; // Crv/Weth
  boosterV1: address;
}

  export const contractKeys = [
    "USDC",
    "USDe",
    "USDx",
    "Flax",
    "SFlax",
    "USDe_USDx_crv",
    "USDC_USDe_crv",
    "convexPool",
    "convexBooster",
    "vault",
    "FlaxLocker",
    "yieldSource",
    "oracle",
    "refPair",
    "rewardPairAddress",
    "boosterV1",
  ] as const;
  
  const createUnsetContractAddresses = (value:"UNSET"|undefined): ContractAddresses_unsettable => {
    // Initialize an empty object typed as Partial<ContractAddresses>
    const result: Partial<ContractAddresses_unsettable> = {};
    
    // Populate the object with "UNSET" for each key
    contractKeys.forEach((key) => {
      result[key] = value;
    });
  
    // Assert that the result is now a fully populated ContractAddresses
    return result as ContractAddresses_unsettable;
  };
  
  // Usage
  export const defaultContractAddresses_unsettable = createUnsetContractAddresses("UNSET");
  export const defaultContractAddresses_nullable = createUnsetContractAddresses(undefined) as ConstractAddresses_nullable;
  
  