import React, { useEffect } from 'react'
import { useAppSelector } from '../hooks/useAppSelector'
import { useAction } from '../hooks/useAction';

const UserList: React.FC = () => {
    const { users, error, loading } = useAppSelector(state => state.user)
    const { fetchUsers } = useAction()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) return <h1>loading</h1>

    if (error) {
        return <h1>{error}</h1>
    }

    console.log(users)
    return (
        <div>
            {
                users.map((user: any) => {
                    return (
                        <h1>{user.name}</h1>
                    )
                })
            }
        </div>
    )
}

export default UserList;
