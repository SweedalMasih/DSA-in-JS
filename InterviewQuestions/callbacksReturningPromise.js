function nameInfo() {
  return Promise.resolve("Sweedal");
}

function details(nameFunction) {
  nameFunction()
    .then((res) => {
      console.log("Hello " + res);
    })
    .catch(() => {
      console.log("It's an error");
    });
}

details(nameInfo);
