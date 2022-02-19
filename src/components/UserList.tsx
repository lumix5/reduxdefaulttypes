import React, { useEffect } from 'react'
import { useAppSelector } from '../hooks/useAppSelector'
import { useAction } from '../hooks/useAction';
import { shallowEqual } from 'react-redux';


const UserList: React.FC = () => {
    const { users, error, loading } = useAppSelector(state => state.user)
    const { fetchUsers } = useAction()

    useEffect(() => {
        fetchUsers()
    }, [])



    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {
                users.map((user: any) => {
                    <h1>{user}</h1>
                })
            }
        </div>
    )
}

export default UserList;