![cf](http://i.imgur.com/7v5ASc8.png) Tree Data Structure
====



## Requirements  
#### Configuration  
  <!-- list of files, configurations, tools, etc that are required -->
  Your lab directory must include  
  * **index.js** -- The entry point to your module
  * **README.md** -- with a documentation about your lab
  * **.gitignore** -- with a robust .gitignore
  * **.eslintrc** -- with the class .eslintrc file
  * **.eslintignore** -- with the class .eslintignore
  * **.package.json** -- with all dependencies and dev-dependencies
  * **lib/** -- directory for holding your programs helper modules
  * **test/** -- directory for holding your programs unit and integration tests



#Finished tests and code for insert() and remove()

#### Feature Tasks  
  * implement a Tree Constructor
  * implement `insert(node)` and `remove(node)` methods on the class
  * implement `find(node)` methods on the class
  * implement `serialize()` and `deserialize()` methods on the class
    * Why?  You cannot simply use `JSON.stringify` and `JSON.parse` because your tree will be made up of class instances.  For that reason, you'll need to concoct a way to traverse the tree into a structure that you **can** run through `JSON.parse/stringify`.  One idea might be to do a traversal, building up an object literal with all of the right references, or perhaps an in-order array that simply notes all of the node values and links...
