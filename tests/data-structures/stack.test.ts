import { describe, expect, it } from "vitest";
import { Stack } from "../../src/data-structures/stack.js";

describe("Stack", () => {
  it("starts empty and safely handles reads and removals", () => {
    const stack = new Stack<number>();

    expect(stack.size).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();
    expect(stack.size).toBe(0);
  });

  it("removes the last value first and tracks size", () => {
    const stack = new Stack<number>();

    stack.push(10);
    expect(stack.size).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    stack.push(20);
    stack.push(30);
    expect(stack.size).toBe(3);

    expect(stack.pop()).toBe(30);
    expect(stack.size).toBe(2);
    expect(stack.pop()).toBe(20);
    expect(stack.size).toBe(1);
    expect(stack.pop()).toBe(10);
    expect(stack.size).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it("peeks without removing the top value", () => {
    const stack = new Stack<string>();
    stack.push("first");
    stack.push("second");

    expect(stack.peek()).toBe("second");
    expect(stack.peek()).toBe("second");
    expect(stack.size).toBe(2);
    expect(stack.pop()).toBe("second");
    expect(stack.peek()).toBe("first");
  });

  it("can be filled again after becoming empty", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.pop();
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.size).toBe(1);
    expect(stack.pop()).toBe(2);
    expect(stack.isEmpty()).toBe(true);
  });

  it("preserves object references and duplicate values", () => {
    const stack = new Stack<{ id: number }>();
    const value = { id: 1 };
    stack.push(value);
    stack.push(value);

    expect(stack.size).toBe(2);
    expect(stack.peek()).toBe(value);
    expect(stack.pop()).toBe(value);
    expect(stack.pop()).toBe(value);
  });

  it("keeps instances independent", () => {
    const first = new Stack<number>();
    const second = new Stack<number>();
    first.push(1);
    second.push(2);

    expect(first.pop()).toBe(1);
    expect(second.peek()).toBe(2);
    expect(second.size).toBe(1);
  });

  it("tracks stored undefined values through size", () => {
    const stack = new Stack<number | undefined>();
    stack.push(undefined);

    expect(stack.size).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.pop()).toBeUndefined();
    expect(stack.isEmpty()).toBe(true);
  });
});
