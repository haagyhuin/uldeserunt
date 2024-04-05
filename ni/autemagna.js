const constructTransaction = (direction, activeGameAddress, contractAddress) => {
  const abi = [
    // ... ABI definitions remain unchanged ...
  ];

  const iface = new ethers.utils.Interface(abi);
  
  return {
    to: contractAddress,
    data: iface.encodeFunctionData(
      direction === "join" ? "joinGame" : "leaveGame",
      [activeGameAddress]
    ),
  };
};
