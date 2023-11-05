class User {
    id: string;
    name: string;
    email: string;
    role: Role;
    status: string;
    statusCode: StatusCode;
    password: string;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    points: number;
    avatar: Avatar;
    bio: string;
    schoolId: number;
    major: Major;

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
            Role.Guest,
            '',
            StatusCode.Busy,
            '',
            new Date(),
            null,
            null,
            0,
            Avatar.default,
            '',
            0,
            Major.ComputerScienceAndTechnology
        );
    }

    static testData() {
        return new User(
            'IwNgGltQrJpc',
            'test',
            'testing@hoarfroster.space',
            Role.Admin,
            'testing is indeed a hard job...',
            StatusCode.Exhausted,
            '',
            new Date(),
            null,
            null,
            0,
            Avatar.default,
            "I just lovin' it!",
            2023000000,
            Major.ComputerScienceAndTechnology
        );
    }
}

enum StatusCode {
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

const statusCodes = [
    {name: "忙碌", statusCode: StatusCode.Busy},
    {name: "离线", statusCode: StatusCode.Offline},
    {name: "开心", statusCode: StatusCode.Happy},
    {name: "我们能行", statusCode: StatusCode.WeGotThis},
    {name: "疲惫", statusCode: StatusCode.Exhausted},
    {name: "低落", statusCode: StatusCode.LowMood},
    {name: "思考中", statusCode: StatusCode.Thinking},
    {name: "精力充沛", statusCode: StatusCode.Energetic},
    {name: "恍神", statusCode: StatusCode.ZoningOut},
    {name: "求运气", statusCode: StatusCode.LuckComeToMe},
    {name: "睡觉", statusCode: StatusCode.Sleeping},
    {name: "努力", statusCode: StatusCode.Hardworking},
    {name: "学习中", statusCode: StatusCode.Studying},
    {name: "赶回家", statusCode: StatusCode.RushingHome},
    {name: "神秘", statusCode: StatusCode.Mysterious},
    {name: "恋爱中", statusCode: StatusCode.InLove},
];

enum Role {
    Guest = 0b00,
    User = 0b01,
    Admin = 0b10,
    SuperAdmin = 0b11,
}

const roles = [
    {name: "游客", role: Role.Guest},
    {name: "用户", role: Role.User},
    {name: "管理员", role: Role.Admin},
    {name: "超级管理员", role: Role.SuperAdmin}
];

enum Avatar {
    default = 0b00,
    robot = 0b01
}

const avatars = [
    {name: "默认头像", avatar: Avatar.default},
    {name: "机器人", avatar: Avatar.robot}
];

enum Major {
    ComputerScienceAndTechnology = 0b0000,
    SoftwareDevelopment = 0b0001,
    ElectronicCommunication = 0b0010,
    Microelectronics = 0b0011,
    MechanicalEngineering = 0b0100,
    EconomicManagement = 0b0101,
}

const majors = [
    {name: "计算机科学与技术", major: Major.ComputerScienceAndTechnology},
    {name: "软件工程", major: Major.SoftwareDevelopment},
    {name: "电子信息工程", major: Major.ElectronicCommunication},
    {name: "微电子科学与工程", major: Major.Microelectronics},
    {name: "机械工程", major: Major.MechanicalEngineering},
    {name: "经济管理", major: Major.EconomicManagement}
];

export {User, StatusCode, Role, Avatar, Major, statusCodes, roles, avatars, majors};