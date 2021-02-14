const { expect } = require("chai");

describe ('Testing MerkleTreeWithHistory', () => {
  let MerkleTreeWithHistory, merkleTreeWithHistory, accounts;
  beforeEach(async() => {
    MerkleTreeWithHistory = await ethers.getContractFactory('MerkleTreeWithHistory');
    merkleTreeWithHistory = await MerkleTreeWithHistory.deploy();
    accounts = await ethers.getSigners();
  });
})