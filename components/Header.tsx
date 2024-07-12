import Link from 'next/link'
import { ChangeTheme } from './ChangeTheme'

const Header = () => {
	return (
		<header className='absolute top-0 px-12 py-2 dark:shadow-white/10 shadow-md flex items-center justify-between z-[9999] w-full'>
			<div className='flex items-center gap-x-10'>
				<Link href='/' className='flex items-center gap-x-4'>
					<p className='text-2xl font-bold'>HEXVEL</p>
				</Link>
				<nav className='flex gap-x-4'>
					<ul className='py-2 text-white/80 px-4 rounded-md transition-colors hover:text-white'>
						<li>
							<Link href='/'>Панель</Link>
						</li>
					</ul>
					<ul className='py-2 text-white/80 px-4 rounded-md transition-colors hover:text-white'>
						<li>
							<Link href='#'>О проекте</Link>
						</li>
					</ul>
					<ul className='py-2 text-white/80 px-4 rounded-md transition-colors hover:text-white'>
						<li>
							<Link href='#'>Контакты</Link>
						</li>
					</ul>
					<ul className='py-2 text-white/80 px-4 rounded-md transition-colors hover:text-white'>
						<li>
							<Link href='#'>GiHub</Link>
						</li>
					</ul>
				</nav>
			</div>
			<ChangeTheme />
		</header>
	)
}

export default Header
