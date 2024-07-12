import { ThemeProvider } from '@/components/ThemeProvider'
import type { Metadata } from 'next'

import Header from '@/components/Header'
import { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
	title: 'Admin panel',
	description: 'admin panel for hexvel module',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<html lang='en' suppressHydrationWarning>
				<head />
				<body className='h-screen dark:bg-[#070707]'>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						<Header />
						{children}
					</ThemeProvider>
				</body>
			</html>
		</>
	)
}
