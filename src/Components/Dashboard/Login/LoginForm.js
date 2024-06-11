"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const response = await axios.get('https://unicodewebdesignapi.liara.run/getadmin')
                setData(response.data[0])
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchAll()
    }, [])
    const router = useRouter();
    const checkLogin = (event) => {
        event.preventDefault()
        if (data && username === data.username && password === data.password) {
            localStorage.setItem('login', 'true')
            alert('Login successful!')
            router.push('../Dsh/Dashboard');
            
        } else {
            alert('Invalid username or password.')
        }
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error loading data.</p>

    return (
        <form onSubmit={checkLogin} className="max-w-sm mx-auto w-full border border-[#999] p-4 rounded-xl">
            <div className="my-5">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                <input 
                    onChange={(event) => setUsername(event.target.value)} 
                    type="text" 
                    id="username" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="name@flowbite.com" 
                    required 
                />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input 
                    onChange={(event) => setPassword(event.target.value)} 
                    type="password" 
                    id="password" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    required 
                />
            </div>
            <button 
                type="submit" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    )
}
