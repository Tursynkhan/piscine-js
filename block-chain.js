function Block(index, hash, data, prev, chain) {
    this.index = index;
    this.hash = hash;
    this.data = data;
    this.prev = prev;
    this.chain = chain;
  }
  
  const blockChain = (data, prev = { index: 0, hash: '0' }) => {
    var block = new Block
      if (prev['index'] === 0){
        block.index = 1
      }else{
          block.index = prev['index'] + 1
      }
      block.hash = hashCode(block.index + prev['hash'] + JSON.stringify(data))
      block.data = data
      block.prev = prev
      block.chain = (e) => blockChain(e, {index: block.index, hash: block.hash})
      return block
    }
  