// Single iteration of a bubble sort, performs one pass of the list
const bubble = (list, compare) => {
  const items = list.slice();
  const itemCount = items.length;
  let amended = false;
  for (let i = 1; i < itemCount; i += 1) {
    if (compare(items[i - 1], items[i])) {
      const temp = items[i - 1];
      items[i - 1] = items[i];
      items[i] = temp;
      amended = true;
    }
  }

  return { items, sorted: !amended };
};

// Full sort, performs multiple passes until the list is sorted
const sort = (list, compare) => {
  let results = { items: list };
  do {
    results = bubble(results.items, compare);
  } while (!results.sorted);

  return results.items;
};

export { bubble, sort };
