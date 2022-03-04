import LinkedList from './LinkedList'

class Snake{
    constructor(startingCell){
        this.body = new LinkedList(startingCell);
        this.snakeCells = new Set([this.body.head.value.cell]);

    }

}
export default Snake;