class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let nodeToInsert = new Node(val);
    if (!this.root) {
      this.root = nodeToInsert;
      return this;
    }
    let current = this.root;
    let inserted = false;
    while (!inserted) {
      if (val < current.val) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = nodeToInsert;
          inserted = true;
        }
      }
      if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = nodeToInsert;
          inserted = true;
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (!current.left) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    }

    if (val > current.val) {
      if (!current.right) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      return 0;
    }
    let current = this.root;

    while (current) {
      if (current.val === val) return current;
      current = val < current.val ? current.left : current.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (!this.root) {
      return 0;
    }
    if (current === null) return undefined;
    if (current.val === val) return current;
    current =
      val < current.val
        ? this.findRecursively(val, current.left)
        : this.findRecursively(val, current.right);
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(current = this.root, array = []) {
    if (!this.root) {
      return 0;
    }
    array.push(current.val);
    if (current.left) this.dfsPreOrder(current.left, array);
    if (current.right) this.dfsPreOrder(current.right, array);
    return array;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(current = this.root, array = []) {
    if (!this.root) {
      return 0;
    }
    if (current.left) this.dfsInOrder(current.left, array);
    array.push(current.val);
    if (current.right) this.dfsInOrder(current.right, array);
    return array;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(current = this.root, array = []) {
    if (!this.root) {
      return 0;
    }
    if (current.left) this.dfsPostOrder(current.left, array);
    if (current.right) this.dfsPostOrder(current.right, array);
    array.push(current.val);
    return array;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(queue = [this.root], arrayToReturn = []) {
    if (!this.root) {
      return 0;
    }
    debugger;
    let current = queue.shift();
    if (!current) return arrayToReturn;
    arrayToReturn.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    this.bfs(queue, arrayToReturn);
    return arrayToReturn;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
