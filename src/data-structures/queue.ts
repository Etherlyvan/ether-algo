interface QueueNode<T> {
  value: T;
  next: QueueNode<T> | undefined;
}

/** A first-in, first-out collection backed by linked nodes. */
export class Queue<T> {
  private head: QueueNode<T> | undefined;
  private tail: QueueNode<T> | undefined;
  private count = 0;

  get size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  enqueue(value: T): void {
    const node: QueueNode<T> = { value, next: undefined };
    if (this.tail === undefined) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.count++;
  }

  dequeue(): T | undefined {
    if (this.head === undefined) return undefined;

    const value = this.head.value;
    this.head = this.head.next;
    this.count--;
    if (this.head === undefined) this.tail = undefined;
    return value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
