import {Avatar, avatars, majors, User} from '@/app/user/usermodel'
import Image from "next/image";

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
    let avatar = avatars.find((e) => e.avatar == user.avatar)!;

    return <>
        <div className="flex flex-col bg-white dark:bg-slate-900 px-4 py-1.5">
            <div className="flex bg-gray-100 dark:bg-gray-800 p-4 rounded-md items-center">
                <div className="w-1/2">
                    <Image src={avatar.link} alt={avatar.name} width={200} height={200} className="mt-4"/>
                </div>
                <div className="w-1/2 pl-4">
                    <h1 className="text-xl font-bold leading-9 tracking-tight">{user.name}</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{user.id}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{user.status}</p>
                </div>
            </div>
            <div className="flex mt-4">
                <div className="w-2/3 bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                    <p className="text-sm text-gray-600 dark:text-gray-400">{user.schoolId}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{majors.find((e) => e.major == user.major)?.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{user.bio}</p>
                    <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        收藏
                    </button>
                </div>
                <div className="w-1/3 bg-gray-100 dark:bg-gray-800 p-4 rounded-md ml-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">{user.points}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{user.createdAt.toLocaleString()}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{user.updatedAt?.toLocaleString()}</p>
                </div>
            </div>
        </div>
    </>
}
