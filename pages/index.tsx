import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Login from './login'

const Home: NextPage = () => {
	return (
		<main role='main'>
			<Flex flexDir={'column'} align={'center'} h={'calc(100vh - 80px)'}>
				{/* 80px is the height of the navbar */}
				<Login />
			</Flex>
		</main>
	)
}

export default Home
