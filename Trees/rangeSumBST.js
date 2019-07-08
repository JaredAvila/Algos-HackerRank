// given a root Node of a Binary Search Tree, return sum of all values within the range of L and R
// definition for BST node
// class Node {
//     constructor(val){
//         this.val = val;
//         this.right = this.left = null;
//     }
// }

const rangeSumBst = (root, L, R) => {
  let total = 0;
  dfs(root);
  return total;

  function dfs(node) {
    if (node === null) {
      return;
    }
    if (node.val >= L && node.val <= R) {
      total += node.val;
    }
    if (node.val === L) {
      dfs(node.right);
    } else if (node.val === R) {
      dfs(node.left);
    } else {
      dfs(node.right);
      dfs(node.left);
    }
  }
};
