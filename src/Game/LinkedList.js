import LinkedListNode from './LinkedListNode'

class LinkedList{
    constructor(value){
        const node = new LinkedListNode(value);
        this.head = node;
        this.tail = node;
    }
}
export default LinkedList;