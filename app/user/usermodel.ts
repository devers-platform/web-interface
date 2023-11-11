class User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    status: string;
    statusCode: UserStatus;
    password: string;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    points: number;
    avatar: UserAvatar;
    bio: string;
    schoolId: number;
    major: UserMajor;

    constructor(
        id: string,
        name: string,
        email: string,
        role: number,
        status: string,
        statusCode: number,
        password: string,
        createdAt: Date,
        updatedAt: Date | null,
        deletedAt: Date | null,
        points: number,
        avatar: number,
        bio: string,
        schoolId: number,
        major: number
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.status = status;
        this.statusCode = statusCode;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.points = points;
        this.avatar = avatar;
        this.bio = bio;
        this.schoolId = schoolId;
        this.major = major;
    }

    static empty() {
        return new User(
            '',
            '',
            '',
            UserRole.Guest,
            '',
            UserStatus.Busy,
            '',
            new Date(),
            null,
            null,
            0,
            UserAvatar.default,
            '',
            0,
            UserMajor.ComputerScienceAndTechnology
        );
    }

    static testData() {
        return new User(
            'IwNgGltQrJpc',
            'test',
            'testing@hoarfroster.space',
            UserRole.Admin,
            'testing is indeed a hard job...',
            UserStatus.Exhausted,
            '',
            new Date(),
            null,
            null,
            0,
            UserAvatar.default,
            "I just lovin' it!",
            2023000000,
            UserMajor.ComputerScienceAndTechnology
        );
    }
}

enum UserStatus {
    Busy = 0b0000,
    Offline = 0b0001,
    Happy = 0b0010,
    WeGotThis = 0b0011,
    Exhausted = 0b0100,
    LowMood = 0b0101,
    Thinking = 0b0110,
    Energetic = 0b0111,
    ZoningOut = 0b1000,
    LuckComeToMe = 0b1001,
    Sleeping = 0b1010,
    Hardworking = 0b1011,
    Studying = 0b1100,
    RushingHome = 0b1101,
    Mysterious = 0b1110,
    InLove = 0b1111,
}

const userStatuses = [
    {name: "忙碌", statusCode: UserStatus.Busy},
    {name: "离线", statusCode: UserStatus.Offline},
    {name: "开心", statusCode: UserStatus.Happy},
    {name: "我们能行", statusCode: UserStatus.WeGotThis},
    {name: "疲惫", statusCode: UserStatus.Exhausted},
    {name: "低落", statusCode: UserStatus.LowMood},
    {name: "思考中", statusCode: UserStatus.Thinking},
    {name: "精力充沛", statusCode: UserStatus.Energetic},
    {name: "恍神", statusCode: UserStatus.ZoningOut},
    {name: "求运气", statusCode: UserStatus.LuckComeToMe},
    {name: "睡觉", statusCode: UserStatus.Sleeping},
    {name: "努力", statusCode: UserStatus.Hardworking},
    {name: "学习中", statusCode: UserStatus.Studying},
    {name: "赶回家", statusCode: UserStatus.RushingHome},
    {name: "神秘", statusCode: UserStatus.Mysterious},
    {name: "恋爱中", statusCode: UserStatus.InLove},
];

enum UserRole {
    Guest = 0b00,
    User = 0b01,
    Admin = 0b10,
    SuperAdmin = 0b11,
}

const userRoles = [
    {name: "游客", role: UserRole.Guest},
    {name: "用户", role: UserRole.User},
    {name: "管理员", role: UserRole.Admin},
    {name: "超级管理员", role: UserRole.SuperAdmin}
];

enum UserAvatar {
    default = 0b00,
    christmas = 0b01
}

const userAvatars = [
    {name: "默认头像", avatar: UserAvatar.default, link: "/images/default-avatar.png"},
    {name: "圣诞装扮", avatar: UserAvatar.christmas, link: "/images/christmas-avatar.png"}
];

enum UserMajor {
    ComputerScienceAndTechnology = 0b0000,
    SoftwareDevelopment = 0b0001,
    ElectronicCommunication = 0b0010,
    Microelectronics = 0b0011,
    MechanicalEngineering = 0b0100,
    EconomicManagement = 0b0101,
}

const userMajors = [
    {name: "计算机科学与技术", major: UserMajor.ComputerScienceAndTechnology},
    {name: "软件工程", major: UserMajor.SoftwareDevelopment},
    {name: "电子信息工程", major: UserMajor.ElectronicCommunication},
    {name: "微电子科学与工程", major: UserMajor.Microelectronics},
    {name: "机械工程", major: UserMajor.MechanicalEngineering},
    {name: "经济管理", major: UserMajor.EconomicManagement}
];

export {User, UserStatus, userStatuses, UserRole, userRoles, UserAvatar, userAvatars, UserMajor, userMajors};