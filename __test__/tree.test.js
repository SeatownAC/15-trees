'use strict';

const Tree = require('../index.js');

const TreeNode = require('../lib/treenode.js');

describe('tree structure', () => {

 
  it('insert root', (done) => {
    let newTree = new Tree;
    let newNode = new TreeNode(1);


    newTree.insert(newNode);

   
    let expected = 1;
    let actual = newTree.root.value;
    expect(actual).toEqual(expected);
    done();
  });

  it('insert child', (done) => {
    let newTree = new Tree;
    let newNode = new TreeNode(1);
    let newChild = new TreeNode(2);
    

    newTree.insert(newNode);
    newTree.insert(newChild);

   
    let expected = 2;
    let actual = newTree.root.leftNode.value;

    expect(actual).toEqual(expected);
    done();
  });

 
//   it('', (done) => {
//     let newList = new List;
//     newList.append(1);
//     newList.prepend(2);
//     let actual = newList.head.value;
//     let expected = 2;
//     expect(actual).toEqual(expected);
//     done();
//   });
  
  
//   it('', (done) => {
//     let newList = new List;
//     newList.append(1);
//     newList.append(2);
//     newList.append(3);
//     newList.reverse();
//     console.log(newList);
//     let actual = newList.head.value;
//     let expected = 3;
//     expect(actual).toEqual(expected);
//     done();
//   });

  it('remove', (done) => {
    let newList = new List;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);
    newList.remove(3);
    
    // let secondNode = newList.head.next;
    // expect(secondNode.next.value).toEqual(4);
    // done();
  });
});
