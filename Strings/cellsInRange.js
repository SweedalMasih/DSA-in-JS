var cellsInRange = function (s) {
  const arr = s.split(":");
  const rows = arr[0];
  const columns = arr[1];

  const startCol = rows.charCodeAt(0);
  const endCol = columns.charCodeAt(0);
  const start = rows.charAt(1);
  const end = columns.charAt(1);
  // console.log(rows, columns, start, end);

  const result = [];

  for (let i = startCol; i <= endCol; i++) {
    // console.log(String.fromCharCode(i))
    for (let j = start; j <= end; j++) {
      result.push(String.fromCharCode(i) + j);
    }
  }
  // console.log(result)
  return result;
};
