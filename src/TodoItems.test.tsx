import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Todos from './TodoItems'
import userEvent from '@testing-library/user-event'

test('loads the todoItems', async () => {
    const props = {
        todos: [{ todo: 'test', completed: false }],
        handleCompletion: jest.fn(),
    }
    render(<Todos {...props} />)
    screen.getByText('todoLists');
    userEvent.click(screen.getByTestId('completion'))
    expect(screen.getByText('todoLists'))
})