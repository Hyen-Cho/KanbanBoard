import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard.jsx';
import { render } from 'react-dom';

let cardsList = [
    {
        id: 1,
        title: "Read the book",
        description: "I should read the **whole** book",
        color: "#BD8D31",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book",
        color: "#3A7E28",
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    },
    {
        id: 3,
        title: "Buy a React Book",
        description: "Pro: An app should be bulit throughout the book",
        color: "#0073e6",
        status: "Done",
        tasks: []
    }
];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));