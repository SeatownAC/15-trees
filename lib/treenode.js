'use strict';

class TreeNode {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class Tree {

  constructor() {
    this.root = null;
  }

  insert(treeNode) {

    if (!this.root) {
      this.root = treeNode;
      return this;

    }

    else {
      this.root.leftNode = treeNode;
    }

  }

  remove(treeNode){ // Big O(n)
    if(this.root.value === value){
      this.root = this.root.next;
    }
    let prevNode = this.root;
    let currentNode = this.root.next;
    while(currentNode){
      if(currentNode.value === value){
        prevNode.next = currentNode.next;
        currentNode = currentNode.next;
        break;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;

    }
  }

  //create a test, similar to one above that makes sure left node doesn;t have value, if does, put on right node.




module.exports = TreeNode;
module.exports = Tree;
