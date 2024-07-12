'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const RequestCode: React.FC = () => {
	const [userId, setUserId] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = async () => {
		if (userId) {
			const response = await fetch(
				'http://localhost:4200/api/users/request-verification-code',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ user_id: Number(userId) }),
				}
			)

			if (!response.ok) {
				setError('Не удалось отправить код')
				console.error('Failed to request verification code')

				return
			}

			setError('')
			setUserId('')
		}
	}

	return (
		<div>
			<h2 className='text-2xl font-bold mb-4'>Отправка кода подтверждения</h2>
			<form onSubmit={e => e.preventDefault()}>
				<Input
					required
					placeholder='Введите идентификатор пользователя'
					value={userId}
					onChange={e => setUserId(e.target.value)}
				/>

				<div className='mt-2'>
					{error && <p className='text-red-500'>{error}</p>}
					<Button onClick={handleSubmit}>Отправить код</Button>
				</div>
			</form>
		</div>
	)
}

export default RequestCode
