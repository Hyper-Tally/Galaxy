import { run, ethers } from "hardhat";
import {
  convertFacetAndSelectorsToString,
  DeployUpgradeTaskArgs,
  FacetsAndAddSelectors,
} from "../tasks/deployUpgrade";

export async function upgrade() {
  const diamondUpgrader = "0x9Fdd6069b4DBb60cE882066dF7E11F0f12B7aFC7";
  const diamondAddress = "0x1669b179dE0b3Ae36170F9922211e08FadEbd775";

  const facets: FacetsAndAddSelectors[] = [
    // {
    //   facetName: "BuildingsFacet",
    //   addSelectors: [
    //     "function getLastClaimed(uint256 _planetId) external view returns (uint256)",
    //   ],
    //   removeSelectors: [
    //     "function getLastClaimed(uint256 _planetId, uint256 _resourceId) external view returns (uint256)",
    //   ],
    // },
    {
      facetName: "ShipsFacet",
      addSelectors: [],
      removeSelectors: [],
    },
    // {
    //   facetName: "SpellsFacet3",
    //   addSelectors: [
    //     // "function startShield(uint256 _heroId) external",
    //     // "function getBatchUnitShieldEndTimestamp(uint256[] calldata _unitTokenIds) external view returns (uint256[500] memory batch_)",
    //     // "function cancelShield(uint256 _heroId) external",
    //     // "function getShieldEndTimestamp(uint256 _heroId) external view returns (uint256)",
    //     // "function getBatchShieldEndTimestamp(uint256[] calldata _heroIds) external view returns (uint256[200] memory batch_)",
    //     // "function craftSpell(uint256 _spellId, uint256 _amount) external",
    //     // "function getClaimableGold(uint256 _landId) external view returns (uint256)",
    //     // "function getClaimableLumber(uint256 _landId) external view returns (uint256)",
    //     // "function getClaimableMana(uint256 _landId) external view returns (uint256)",
    //     // "function setAddresses(address _goldAddress, address _lumberAddress, address _manaAddress, address _buildingsAddress, address _landsAddress, address _unitsAddress, address _heroesAddress, address _spellsAddress) external",
    //     // "function startShield(uint256 _heroId, uint256[] calldata _unitTokenIds, uint256[] calldata _landIds, uint256 _hours) external",
    //   ],
    //   removeSelectors: [
    //     // "function getBatchUnitShieldEndTimestamp(uint256[] calldata _unitTokenIds) external view returns (uint256[200] memory batch_)",
    //     // "function setAddresses(address _goldAddress, address _lumberAddress, address _manaAddress, address _buildingsAddress, address _landsAddress, address _unitsAddress, address _heroesAddress) external",
    //     // "function startShield(uint256 _heroId, uint256[] calldata _unitTokenIds, uint256 _hours) external",
    //   ],
    // },
    // {
    //   facetName: "BuildingsFacet",
    //   addSelectors: [],
    //   removeSelectors: [],
    // },
    // {
    //   facetName: "ResourcesFacet",
    //   addSelectors: [],
    //   removeSelectors: [],
    // },
    // {
    //   facetName: "SpellsFacet",
    //   addSelectors: [],
    //   removeSelectors: [],
    // },
    // {
    //   facetName: "UnitsFacet",
    //   addSelectors: [],
    //   removeSelectors: [],
    // },
  ];

  const joined = convertFacetAndSelectorsToString(facets);

  const args: DeployUpgradeTaskArgs = {
    diamondUpgrader: diamondUpgrader,
    diamondAddress: diamondAddress,
    facetsAndAddSelectors: joined,
    useLedger: false,
    useMultisig: false,
    initAddress: ethers.constants.AddressZero,
    initCalldata: "0x",
  };

  await run("deployUpgrade", args);
}
export async function upgradeTestVersion(diamondAddr: any) {
  const diamondUpgrader = "0x9Fdd6069b4DBb60cE882066dF7E11F0f12B7aFC7";
  const diamondAddress = diamondAddr;

  const facets: FacetsAndAddSelectors[] = [
    {
      facetName: "BuildingsFacet",
      addSelectors: [
        // "function getRegistered(address _account) external view returns (bool)",
        // "function getCraftBuildings(uint256 _planetId) external view returns (uint256, uint256)",
        "function getLastClaimed(uint256 _planetId) external view returns (uint256)",
      ],
      removeSelectors: [
        // "function getBatchUnitShieldEndTimestamp(uint256[] calldata _unitTokenIds) external view returns (uint256[200] memory batch_)",
        // "function setAddresses(address _goldAddress, address _lumberAddress, address _manaAddress, address _buildingsAddress, address _landsAddress, address _unitsAddress, address _heroesAddress) external",
        // "function startShield(uint256 _heroId, uint256[] calldata _unitTokenIds, uint256 _hours) external",
        "function getLastClaimed(uint256 _planetId, uint256 _resourceId) external view returns (uint256)",
      ],
    },
    {
      facetName: "BuildingsFacet",
      addSelectors: [
        // "function getRegistered(address _account) external view returns (bool)",
        // "function getCraftBuildings(uint256 _planetId) external view returns (uint256, uint256)",
        "function getLastClaimed(uint256 _planetId) external view returns (uint256)",
      ],
      removeSelectors: [
        // "function getBatchUnitShieldEndTimestamp(uint256[] calldata _unitTokenIds) external view returns (uint256[200] memory batch_)",
        // "function setAddresses(address _goldAddress, address _lumberAddress, address _manaAddress, address _buildingsAddress, address _landsAddress, address _unitsAddress, address _heroesAddress) external",
        // "function startShield(uint256 _heroId, uint256[] calldata _unitTokenIds, uint256 _hours) external",
        "function getLastClaimed(uint256 _planetId, uint256 _resourceId) external view returns (uint256)",
      ],
    },
    // {
    //   facetName: "SpellsFacet3",
    //   addSelectors: [
    //     // "function startShield(uint256 _heroId) external",
    //     // "function getBatchUnitShieldEndTimestamp(uint256[] calldata _unitTokenIds) external view returns (uint256[500] memory batch_)",
    //     // "function cancelShield(uint256 _heroId) external",
    //     // "function getShieldEndTimestamp(uint256 _heroId) external view returns (uint256)",
    //     // "function getBatchShieldEndTimestamp(uint256[] calldata _heroIds) external view returns (uint256[200] memory batch_)",
    //     // "function craftSpell(uint256 _spellId, uint256 _amount) external",
    //     // "function getClaimableGold(uint256 _landId) external view returns (uint256)",
    //     // "function getClaimableLumber(uint256 _landId) external view returns (uint256)",
    //     // "function getClaimableMana(uint256 _landId) external view returns (uint256)",
    //     // "function setAddresses(address _goldAddress, address _lumberAddress, address _manaAddress, address _buildingsAddress, address _landsAddress, address _unitsAddress, address _heroesAddress, address _spellsAddress) external",
    //     // "function startShield(uint256 _heroId, uint256[] calldata _unitTokenIds, uint256[] calldata _landIds, uint256 _hours) external",
    //   ],
    //   removeSelectors: [
    //     // "function getBatchUnitShieldEndTimestamp(uint256[] calldata _unitTokenIds) external view returns (uint256[200] memory batch_)",
    //     // "function setAddresses(address _goldAddress, address _lumberAddress, address _manaAddress, address _buildingsAddress, address _landsAddress, address _unitsAddress, address _heroesAddress) external",
    //     // "function startShield(uint256 _heroId, uint256[] calldata _unitTokenIds, uint256 _hours) external",
    //   ],
    // },
    // {
    //   facetName: "BuildingsFacet",
    //   addSelectors: [],
    //   removeSelectors: [],
    // },
    // {
    //   facetName: "ResourcesFacet",
    //   addSelectors: [],
    //   removeSelectors: [],
    // },
    // {
    //   facetName: "SpellsFacet",
    //   addSelectors: [],
    //   removeSelectors: [],
    // },
    // {
    //   facetName: "UnitsFacet",
    //   addSelectors: [],
    //   removeSelectors: [],
    // },
  ];

  const joined = convertFacetAndSelectorsToString(facets);

  const args: DeployUpgradeTaskArgs = {
    diamondUpgrader: diamondUpgrader,
    diamondAddress: diamondAddress,
    facetsAndAddSelectors: joined,
    useLedger: false,
    useMultisig: false,
    initAddress: ethers.constants.AddressZero,
    initCalldata: "0x",
  };

  await run("deployUpgrade", args);
}

if (require.main === module) {
  upgrade()
    .then(() => process.exit(0))
    // .then(() => console.log('upgrade completed') /* process.exit(0) */)
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
