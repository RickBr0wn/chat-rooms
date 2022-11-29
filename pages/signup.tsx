import {
	Stack,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	Text
} from '@chakra-ui/react'
import error from 'next/error'
import Link from 'next/link'
import { FC, useState } from 'react'
import { useAuth } from '../contexts/authContext'

type Props = {}

const Signup: FC<Props> = (): JSX.Element => {
	const [email, setEmail] = useState<string>('')
	const [displayName, setDisplayName] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')
	const { error, isLoading, signUp } = useAuth()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (password !== confirmPassword) {
			return
		}

		try {
			await signUp(email, displayName, password, confirmPassword)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Stack alignItems={'center'} maxW={600} p={6}>
			<Heading fontSize={'4xl'}>Sign Up</Heading>

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

					<FormLabel htmlFor='display-name'>Display Name</FormLabel>
					<Input
						type='display-name'
						value={displayName}
						onChange={e => setDisplayName(e.target.value)}
						name='display-name'
						id='display-name'
						mb={2}
					/>

					<FormLabel htmlFor='password'>Password</FormLabel>
					<Input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						name='password'
						id='password'
						mb={2}
					/>

					<FormLabel htmlFor='confirm-password'>Confirm Password</FormLabel>
					<Input
						type='confirm-password'
						value={confirmPassword}
						onChange={e => setConfirmPassword(e.target.value)}
						name='confirm-password'
						id='confirm-password'
						mb={2}
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
			<Text fontSize={'xs'} align={'center'} mt={'-20px'}>
				Already have an account?{' '}
				<Text as={'span'} color={'pink.300'}>
					<Link href={'/login'}>
						<a>Log In</a>
					</Link>
				</Text>
			</Text>
		</Stack>
	)
}

export default Signup

// Path: pages/signup.tsx
// Created at: 01:21:18 - 29/11/2022
// Language: Typescript
// Framework: React/Next.js (Chakra UI)
