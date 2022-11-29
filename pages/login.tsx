import {
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	Text
} from '@chakra-ui/react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '../contexts/authContext'

type Props = {}

const Login: NextPage<Props> = (): JSX.Element => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const { error, isLoading, login } = useAuth()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			await login(email, password)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Stack alignItems={'center'} maxW={600} p={6}>
			<Heading fontSize={'4xl'}>Log In</Heading>

			<FormControl>
				<form onSubmit={handleSubmit}>
					<FormLabel mt={4} htmlFor='email'>
						Email
					</FormLabel>
					<Input
						type='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						name='email'
						id='email'
						mb={2}
					/>

					<FormLabel htmlFor='password'>Password</FormLabel>
					<Input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						name='password'
						id='password'
					/>

					<Text fontSize={'sm'} color={'pink.500'} h={6}>
						{error}
					</Text>

					<Button
						isLoading={isLoading}
						spinnerPlacement='start'
						colorScheme={'pink'}
						width={'100%'}
						type='submit'
					>
						Log in
					</Button>
				</form>
			</FormControl>
			<Text fontSize={'xs'} mt={'-20px'} align={'center'}>
				Forgot Password?{' '}
				<Text as={'span'} color={'pink.300'}>
					<Link href={'/forgot-password'}>
						<a>Reset Password</a>
					</Link>
				</Text>
			</Text>
			<Text fontSize={'xs'} align={'center'} mt={'-20px'}>
				Need an account?{' '}
				<Text as={'span'} color={'pink.300'}>
					<Link href={'/signup'}>
						<a>Sign Up</a>
					</Link>
				</Text>
			</Text>
		</Stack>
	)
}

export default Login

// Path: pages/login.tsx
// Created at: 00:37:17 - 29/11/2022
// Language: Typescript
// Framework: React/Next.js (Chakra UI)
