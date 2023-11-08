class Queue {
  constructor() {
    this.queue = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to rear of queue if not full
  // if full throw error
  enqueue(item) {
    if (this.isFull()) {
      throw new Error("Queue is full")
    }

    this.queue.push(item)
  }

  // remove item from front of queue and return it
  dequeue() {
    return this.queue.shift()
  }

  // return item at front of queue without removing it
  peek() {
    return this.queue[0]
  }

  // return true if queue is empty, otherwise false
  isEmpty() {
    return this.size() === 0
  }

  // return true if queue is full, otherwise false
  isFull() {
    return this.size() >= this.limit
  }

  // return number of items in queue
  size() {
    return this.queue.length
  }

  // return -1 if item not in queue, otherwise integer representing 
  // how far it is from the front
  search(target) {
    return this.queue.indexOf(target)
  }

  // print contents of queue: do not return the queue itself!
  print() {

  }
}

if (require.main === module) {
  // add your own tests in here
}

module.exports = Queue;
