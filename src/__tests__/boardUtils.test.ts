import { describe, expect, test } from 'vitest'
import { moveCard } from '../utils/boardUtils';

describe('Move Card', () => {
    test('should move a card from todo to inProgress', () => {
        const initialBoard = {
            "todo": [{ id: 1, text: "Task 1" }],
            "inProgress": [],
            "done": []
        };
        const updatedBoard = moveCard(initialBoard, 1, "todo", "inProgress");
        expect(updatedBoard.todo).toHaveLength(0);
        expect(updatedBoard.inProgress).toHaveLength(1);
        expect(updatedBoard.inProgress[0]).toEqual({ id: 1, text: "Task 1" });
    });
    test('should move a card from inProgress to todo', () => {
        const initialBoard = {
            "todo": [],
            "inProgress": [{ id: 1, text: "Task 1" }],
            "done": []
        };
        const updatedBoard = moveCard(initialBoard, 1, "inProgress", "todo");
        expect(updatedBoard.inProgress).toHaveLength(0);
        expect(updatedBoard.todo).toHaveLength(1);
        expect(updatedBoard.todo[0]).toEqual({ id: 1, text: "Task 1" });
    });
    test('should move a card from todo to done', () => {
        const initialBoard = {
            "todo": [{ id: 1, text: "Task 1" }],
            "inProgress": [],
            "done": []
        };
        const updatedBoard = moveCard(initialBoard, 1, "todo", "done");
        expect(updatedBoard.todo).toHaveLength(0);
        expect(updatedBoard.done).toHaveLength(1);
        expect(updatedBoard.done[0]).toEqual({ id: 1, text: "Task 1" });
    });
});