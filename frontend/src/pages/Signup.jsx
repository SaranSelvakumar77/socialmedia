import React from 'react'
import { use } from 'react'
import { useState } from 'react'

const Signup = () => {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: ''
    })
    const handChange = (e) => {
        const { name, value } = e.target
        setDetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!details.name || !details.password || !details.email) {
            alert("Please fill all the details")
            return
        }
        try {
            axios.post('')
        } catch (error) {

        }
        console.log(details)
    }
    return (
        <div className="min-h-screen bg-white flex items-center justify-center gap-20">
            <div>
                <p className="text-blue-600 text-center italic mb-4">
                    "Extend your arms in welcome to the future. <br />The best is yet to come!"  Anthony de Mello
                </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm border border-blue-200">
                <h1 className="text-3xl font-bold text-blue-700 mb-2 text-center">Welcome to Social Media</h1>

                <p className="text-blue-600 mb-6 text-center">Connect, share, and grow with us.</p>
                <div className="flex flex-col gap-4">
                    <input
                        name='name'
                        type="text"
                        placeholder="Name"
                        onChange={handChange}
                        className="p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        name='email'
                        type="email"
                        placeholder="Email"
                        onChange={handChange}
                        className="p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        name='password'
                        type="password"
                        placeholder="Password"
                        onChange={handChange}
                        className="p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        onClick={handleSubmit}
                    >
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup
