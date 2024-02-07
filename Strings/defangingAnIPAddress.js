var defangIPaddr = function (address) {
  const newAddress = address.replaceAll(".", "[.]");
  // console.log(newAddress)
  return newAddress;
};
