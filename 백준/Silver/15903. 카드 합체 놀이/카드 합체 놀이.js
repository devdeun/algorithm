const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [_, m] = a.split(" ").map(Number);

class MinHeap {
  constructor() {
    this.heap = [BigInt(0)];
  }

  insert(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (
      currentIndex > 1 &&
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  remove() {
    if (this.heap.length === 2) return this.heap.pop();
    const min = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.heapify(1);
    return min;
  }

  heapify(idx) {
    let smallest = idx;
    const left = 2 * idx;
    const right = 2 * idx + 1;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest])
      smallest = left;
    if (right < this.heap.length && this.heap[right] < this.heap[smallest])
      smallest = right;

    if (smallest !== idx) {
      [this.heap[idx], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[idx],
      ];
      this.heapify(smallest);
    }
  }

  sum() {
    return this.heap.reduce((acc, val) => acc + val, BigInt(0));
  }
}

const heap = new MinHeap();

const arr = b.split(" ").map(BigInt);
arr.forEach((n) => heap.insert(n));

for (let i = 0; i < m; i++) {
  const x = heap.remove();
  const y = heap.remove();
  const sum = x + y;
  heap.insert(sum);
  heap.insert(sum);
}

console.log(heap.sum().toString());