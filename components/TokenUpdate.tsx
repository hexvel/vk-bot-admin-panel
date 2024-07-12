'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const TokenUpdate: React.FC = () => {
	const [userId, setUserId] = useState('')
	const [token, setToken] = useState('')
	const [verificationCode, setVerificationCode] = useState('')
	const [error, setError] = useState('')
	const [isSuccess, setIsSuccess] = useState(false)

	const handleSubmit = async () => {
		if (userId && token && verificationCode) {
			const response = await fetch('https://api.hexvel.ru/users/token', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					user_id: Number(userId),
					token,
					verification_code: verificationCode,
				}),
			})

			if (!response.ok) {
				setError('Не удалось обновить токен')
				return
			}

			setIsSuccess(true)
			setUserId('')
			setToken('')
			setError('')
			setVerificationCode('')
		}
	}

	return (
		<div className='mt-8'>
			{isSuccess ? (
				<p className='text-green-500'>Токен успешно обновлен</p>
			) : (
				<form onSubmit={e => e.preventDefault()}>
					<h2 className='text-2xl font-bold mb-4'>Обновление токена</h2>
					<div className='mb-2'>
						<Input
							required
							placeholder='Введите идентификатор пользователя'
							value={userId}
							onChange={e => setUserId(e.target.value)}
						/>
					</div>
					<div className='mb-2'>
						<Input
							required
							placeholder='Введите новый токен'
							value={token}
							onChange={e => setToken(e.target.value)}
						/>
					</div>
					<div className='mb-2'>
						<Input
							required
							placeholder='Введите код подтверждения'
							value={verificationCode}
							onChange={e => setVerificationCode(e.target.value)}
						/>
					</div>
					{error ? <p className='text-red-500'>{error}</p> : null}
					<Button onClick={handleSubmit}>Обновить токен</Button>
				</form>
			)}
		</div>
	)
}

export default TokenUpdate
