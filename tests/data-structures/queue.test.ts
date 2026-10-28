import { describe, expect, it } from "vitest";
import { Queue } from "../../src/index.js";

describe("Queue", () => {
  it("starts empty and handles repeated removals", () => {
    const queue = new Queue<number>();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBeUndefined();
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.size).toBe(0);
  });

  it("preserves FIFO order and tracks size during interleaved operations", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    expect(queue.size).toBe(1);
    expect(queue.isEmpty()).toBe(false);
    queue.enqueue(2);
    expect(queue.size).toBe(2);
    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
    expect(queue.size).toBe(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.size).toBe(1);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.size).toBe(0);
    expect(queue.peek()).toBeUndefined();
    expect(queue.isEmpty()).toBe(true);
  });

  it("can be reused after draining the last node", () => {
    const queue = new Queue<string>();
    for (const value of ["first", "second", "third"]) {
      queue.enqueue(value);
      expect(queue.peek()).toBe(value);
      expect(queue.dequeue()).toBe(value);
      expect(queue.size).toBe(0);
    }
    queue.enqueue("fourth");
    queue.enqueue("fifth");
    expect(queue.dequeue()).toBe("fourth");
    expect(queue.dequeue()).toBe("fifth");
  });

  it("preserves duplicate object references and isolates instances", () => {
    const first = new Queue<{ id: number }>();
    const second = new Queue<{ id: number }>();
    const value = { id: 1 };
    first.enqueue(value);
    first.enqueue(value);
    expect(first.size).toBe(2);
    expect(first.peek()).toBe(value);
    expect(first.dequeue()).toBe(value);
    expect(first.dequeue()).toBe(value);
    expect(second.isEmpty()).toBe(true);
  });

  it("allows undefined as a stored value", () => {
    const queue = new Queue<number | undefined>();
    queue.enqueue(undefined);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size).toBe(2);
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.dequeue()).toBe(1);
    expect(queue.isEmpty()).toBe(true);
  });
});
