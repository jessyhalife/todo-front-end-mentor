export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export const FILTERS = {
    ALL: "ALL",
    ACTIVE: "ACTIVE",
    COMPLETED: "COMPLETED"
}