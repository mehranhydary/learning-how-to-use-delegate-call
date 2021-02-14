pragma solidity 0.5.17;

import "../MerkleTreeWithHistory.sol";

contract MerkleTreeWithHistoryMock is MerkleTreeWithHistory {
    constructor(uint32 _treeLevels) public MerkleTreeWithHistory(_treeLevels) {}

    function insert(bytes32 _leaf) public {
        _insert(_leaf);
    }
}
