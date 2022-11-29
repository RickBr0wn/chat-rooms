import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyBjcGNQDI0DnXOV0MsxvYcYL2uFq71jLOg',
	authDomain: 'chat-rooms-e29be.firebaseapp.com',
	projectId: 'chat-rooms-e29be',
	storageBucket: 'chat-rooms-e29be.appspot.com',
	messagingSenderId: '505866704179',
	appId: '1:505866704179:web:d9e68c958341c5e6af9a46',
	measurementId: 'G-PQCJDPYJCD'
}

initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()

export { db, auth }
