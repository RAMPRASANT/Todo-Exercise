import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoLists from './TodoLists'
import userEvent from '@testing-library/user-event'

test('loads the todoItems', async () => {
    render(<TodoLists />)
    expect(screen.getByText('Description'))
})