pragma solidity ^0.5.0;

contract HelloBlockchain
{
    string private message;

    constructor() public {
        message = "hello world!";
    }

    function get() public view returns (string memory) {
        return message;
    }

    function set(string memory newMessage) public {
        message = newMessage;
    }
}