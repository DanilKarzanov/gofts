export class TreeNode {
    data: any;
    left: any;
    right: any;

    constructor(data: any) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

export const treeEx = new TreeNode(1);
treeEx.left = new TreeNode(2);
treeEx.right = new TreeNode(3);
treeEx.left.left = new TreeNode(4);
treeEx.left.right = new TreeNode(5);