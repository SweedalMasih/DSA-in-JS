var interpret = function (command) {
  if (command.includes("()")) {
    command = command.replaceAll("()", "o");
  }
  if (command.includes("(al)")) {
    command = command.replaceAll("(al)", "al");
  }
  // console.log(command);

  return command;
};
