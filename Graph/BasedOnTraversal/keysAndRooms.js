var canVisitAllRooms = function (rooms) {
  /*
  const allRooms = rooms.flat();
  const uniqueRoomsPresent = new Set(allRooms);
  const visited = new Set();
  const queue = [rooms[0][0]];

  visited.add(rooms[0][0]);

  console.log(queue);

  while(queue.length > 0) {
      const key = queue.shift();
      rooms?.[key]?.forEach(key => {
          if(!visited.has(key)) {
              visited.add(key);
              queue.push(key);
          }
      })
  }
  console.log(visited, uniqueRoomsPresent)

  if (visited.size !== uniqueRoomsPresent.size) {
      return false;
  }
  for (let elem of visited) {
      if (!uniqueRoomsPresent.has(elem)) {
          return false;
      }
  }
  return true;
  */

  const visited = new Set();
  const queue = [0];
  const length = rooms.length;

  visited.add(0);

  while (queue.length > 0) {
    const key = queue.shift();
    rooms[key]?.forEach((neighbour) => {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    });
  }

  console.log(visited.size, length);

  return visited.size === length;
};
