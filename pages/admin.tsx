import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { useAuth } from '../contexts/authContext'

type Props = {}

const Admin: FC<Props> = (): JSX.Element => {
	const { user } = useAuth()
	const router = useRouter()

	useEffect(() => {
		if (!user) {
			router.push('/login')
		}
	}, [router, user])

	return <h1>Admin</h1>
}

export default Admin

// Path: pages/admin.tsx
// Created at: 01:28:05 - 29/11/2022
// Language: Typescript
// Framework: React/Next.js
