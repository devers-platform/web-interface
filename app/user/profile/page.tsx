import {User} from "@/app/user/usermodel";

export default function () {
    let user: User;

    if (process.env.NODE_ENV == "development") {
        user = User.testData();
    } else {
        // TODO: get user information from server
        user = User.empty();
    }

    return <>
    </>
}