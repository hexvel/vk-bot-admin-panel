'use client'

import React, { useState } from 'react'
import { Label } from './ui/label'
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input'

const RequestCode: React.FC = () => {
	const [userId, setUserId] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = async () => {
		if (userId) {
			const response = await fetch(
				'https://api.hexvel.ru/users/request-verification-code',
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
			<div className='flex flex-col justify-center'>
				<Label className='mb-4'>Получите код подтверждения</Label>
				<PlaceholdersAndVanishInput
					placeholders={['Введите айди']}
					onSubmit={handleSubmit}
					onChange={e => setUserId(e.target.value)}
				/>
			</div>
		</div>
	)
}

export default RequestCode
