import TokenUpdate from '@/components/TokenUpdate'
import React from 'react'
import RequestCode from '../components/RequestCode'

const AdminPanel: React.FC = () => {
	return (
		<div className='h-full p-8 flex flex-col justify-center items-center'>
			<h1 className='text-3xl font-bold mb-8'>Панель управления модулем 123</h1>
			<div className='w-full p-4 md:w-[600px] shadow-2xl shadow-violet-950 border border-gray-600 rounded-xl md:p-10'>
				<RequestCode />
				<TokenUpdate />
			</div>
		</div>
	)
}

export default AdminPanel
