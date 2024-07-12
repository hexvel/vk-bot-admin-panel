import React from 'react'
import { Button } from './ui/button'

interface User {
	user_id: number
	name: string
}

interface UserListProps {
	users: User[] | undefined
	onRequestCode: (userId: number) => void
}

const UserList: React.FC<UserListProps> = ({ users, onRequestCode }) => {
	return (
		<div>
			<h2 className='text-2xl font-bold mb-4'>User List</h2>
			<ul>
				{!users ? (
					<p>Loading...</p>
				) : (
					users.map(user => (
						<li key={user.user_id} className='mb-2'>
							<span>{user.name}</span>
							<Button
								className='ml-4'
								onClick={() => onRequestCode(user.user_id)}
							>
								Request Code
							</Button>
						</li>
					))
				)}
			</ul>
		</div>
	)
}

export default UserList
