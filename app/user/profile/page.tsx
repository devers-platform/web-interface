import {User} from '@/app/user/usermodel'
import Logo from "@/app/components/logo";
import Link from "next/link";

export default function UserProfile() {
    let user: User

    if (process.env.NODE_ENV == 'development') {
        user = User.testData()
    } else {
        // TODO: get user information from server
        // let res = await fetch('http://localhost:3000/api/user')
        // let data = await res.json()
        // user = User.from(data)
        user = User.empty()
    }

    return <>
        <h1 className="text-2xl font-bold leading-9 tracking-tight">{user.name}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">{user.id}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{user.createdAt.toLocaleString()}</p>
        </>
}
