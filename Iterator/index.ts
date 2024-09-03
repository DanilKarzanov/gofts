import { IAggregate, IIterator } from "./Iterator.model";
import { treeEx, TreeNode } from "./TreeSample";

enum DFSWays {
    INORDER,
    PREORDER,
    POSTORDER
}

class Aggregate implements IAggregate<number> {

    constructor(
        private node: TreeNode, 
        private way: DFSWays
    ) {}

    createIterator() {
        switch (this.way) {
            case DFSWays.INORDER:
                return new InorderIterator(this.node)
            case DFSWays.PREORDER:
                return new PreorderIterator(this.node)
            case DFSWays.POSTORDER:
                return new PostorderIterator(this.node)
        }
    }
}

class InorderIterator implements IIterator<number> {
    private data: Array<number> = []
    private iterIdx: number = 0

    constructor(private node: TreeNode) {
        this.traverse(node)
    }

    public next() {
        const el = this.data[this.iterIdx]
        this.iterIdx++
        return el
    }

    public hasNext() {
        return this.iterIdx < this.data.length
    }

    private traverse(node: TreeNode | null) {
        if (node === null) {
            return
        }

        this.traverse(node.left)
        this.data.push(node.data)
        this.traverse(node.right)
    }

}

class PreorderIterator implements IIterator<number> {
    private data: Array<number> = []
    private iterIdx: number = 0

    constructor(private node: TreeNode) {
        this.traverse(node)
    }

    public next() {
        const el = this.data[this.iterIdx]
        this.iterIdx++
        return el
    }

    public hasNext() {
        return this.iterIdx < this.data.length
    }

    private traverse(node: TreeNode | null) {
        if (node === null) {
            return
        }

        this.data.push(node.data)
        this.traverse(node.left)
        this.traverse(node.right)
    }
}

class PostorderIterator implements IIterator<number> {
    private data: Array<number> = []
    private iterIdx: number = 0

    constructor(private node: TreeNode) {
        this.traverse(node)
    }

    public next() {
        const el = this.data[this.iterIdx]
        this.iterIdx++
        return el
    }

    public hasNext() {
        return this.iterIdx < this.data.length
    }

    private traverse(node: TreeNode | null) {
        if (node === null) {
            return
        }

        this.traverse(node.left)
        this.traverse(node.right)
        this.data.push(node.data)
    }
}

const main = () => {
    // traverse a tree in inorder, postorder, preorder
    const inorderIt = new Aggregate(treeEx, DFSWays.INORDER).createIterator()
    const postorderIt = new Aggregate(treeEx, DFSWays.POSTORDER).createIterator()
    const preorderIt = new Aggregate(treeEx, DFSWays.PREORDER).createIterator()
    
    while (inorderIt.hasNext()) {
        console.log(inorderIt.next())
    }

    while (postorderIt.hasNext()) {
        console.log(postorderIt.next())
    }

    while (preorderIt.hasNext()) {
        console.log(preorderIt.next())
    }
}

main()