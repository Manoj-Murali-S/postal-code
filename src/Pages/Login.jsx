import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
const Login = () => {
    const [input, setInput] = useState({ email: '', password: '' });
    const [errorMessage, seterrorMessage] = useState('');


    const handleChange = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('auth')) navigate.push('/')
    }, [])
    const submitHandler = e => {
        e.preventDefault();

        if (input.email !== 'test@example.com' || input.password !== 'password') return seterrorMessage('Invalid email or password');

        navigate('/')
        localStorage.setItem('auth', true)

    };

    const inputClass = "block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-gray-400 focus:ring-1 sm:text-sm sm:leading-6 focus:outline-none"
    return (
        <>
            <div className="flex min-h-screen items-center flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="rounded-lg border shadow p-10 mx-auto sm:max-w-sm">  <div className="sm:mx-auto w-full">
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                    <div className="mt-10 sm:mx-auto w-full  ">
                        <form className="space-y-6" onSubmit={submitHandler}>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={handleChange}
                                        autoComplete="current-password"
                                        required
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;