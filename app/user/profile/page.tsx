import {User, userAvatars, userMajors} from '@/app/user/usermodel'
import {faAdd} from '@fortawesome/free-solid-svg-icons/faAdd'
import {faShare} from '@fortawesome/free-solid-svg-icons/faShare'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Image from 'next/image'

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
    let avatar = userAvatars.find((e) => e.avatar == user.avatar)!,
        major = userMajors.find((e) => e.major == user.major)!
    return (
        <>
            <div className="relative mx-auto my-8 flex max-w-6xl rounded bg-white px-8 py-4 dark:bg-slate-900">
                <div className="-mt-8">
                    <Image
                        src={avatar.link}
                        alt={avatar.name}
                        width={160}
                        height={160}
                        className="rounded-xl border-4 border-white bg-slate-200 dark:border-slate-400 dark:bg-slate-800"
                    />
                </div>
                <div className="my-4 ml-8 grow">
                    <h1 className="pb-4 text-3xl font-bold leading-9 tracking-tight">
                        {user.name}
                    </h1>
                    <div className="space-y-2 text-gray-600 dark:text-gray-400">
                        <p>
                            <span className="inline-block w-[128px]">
                                唯一识别符 ID
                            </span>
                            <span>{user.id}</span>
                        </p>
                        <p>
                            <span className="inline-block w-[128px]">
                                学校个人 ID
                            </span>
                            <span>{user.schoolId}</span>
                        </p>
                        <p>
                            <span className="inline-block w-[128px]">专业</span>
                            <span>{major.name}</span>
                        </p>
                        <p>
                            <span className="inline-block w-[128px]">
                                个人简介
                            </span>
                            <span>{user.bio}</span>
                        </p>
                    </div>
                </div>
                <div className="my-4">
                    <button className="mx-2 rounded bg-blue-600 px-4 py-2 dark:hover:bg-blue-700">
                        <FontAwesomeIcon icon={faAdd} /> 关注
                    </button>
                    <button className="mx-2 rounded bg-blue-600 px-4 py-2 dark:hover:bg-blue-700">
                        <FontAwesomeIcon icon={faShare} /> 分享
                    </button>
                </div>
            </div>
        </>
    )
}
