import React, { useEffect } from 'react'
import { useAction } from '../hooks/useAction'
import { useAppSelector } from '../hooks/useAppSelector'


const paginationDefault = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

const paginationActive = {
    color: "white",
    backgroundColor: "lightsteelblue",
    padding: "10px",
    fontFamily: "Arial"
};

const TodoList: React.FC = () => {
    const { page, todos, error, limit, loading } = useAppSelector(state => state.todo)
    const { fetchTodos, setTodoPage } = useAction()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error</h1>
    }

    return (
        <div>
            {todos.map((todo) => {
                console.log(todo)
                return (
                    <div key={todo.id}>
                        {todo.userId} - {todo.title}
                    </div>
                )
            })}
            <div style={{ display: 'flex' }}>
                {pages.map((currentPage) => {
                    return (
                        <div
                            style={currentPage === page ? paginationActive : paginationDefault}
                            onClick={() => {
                                setTodoPage(currentPage)
                            }}
                        >
                            {currentPage}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList
