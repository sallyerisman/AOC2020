const input = document.getElementById("app").innerText;
const parsedInput = input.split(/\r?\n/);

const slope = parsedInput.map((item) => {
  return item.split(" ");
});

const parsed = slope[0]; // = An array with 323 elements that each contains 31 elements

const countTrees = (x, y) => {
  let trees = 0;
  let index = x;

  for (i = y; i < parsed.length; i+=y) {

    const row = parsed[i];

    if (row[index] == '#') {
      trees++
    }
    
    index = (index + x) % row.length;
  }

  return trees;
}

console.log('Treecount part 1: ', countTrees(3, 1))

console.log('Treecount part two: ', countTrees(1, 1) * countTrees(3, 1) * countTrees(5, 1) * countTrees(7, 1) * countTrees(1, 2))

