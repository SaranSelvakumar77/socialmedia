import React from 'react'

const Login = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm border border-blue-200">
                <h1 className="text-3xl font-bold text-blue-700 mb-2 text-center">Welcome Back to Social Media</h1>
                <p className="text-blue-600 text-center italic mb-4">
                    "Login to reconnect, rediscover, and continue your journey with us."
                </p>
                <p className="text-blue-600 mb-6 text-center">We’re glad to see you again.</p>
                <div className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
