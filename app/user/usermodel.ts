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

enum Role {
    Guest = 0b00,
    User = 0b01,
    Admin = 0b10,
    SuperAdmin = 0b11,
}

enum Avatar {
    default = 0b00
}

enum Major {
    ComputerScienceAndTechnology = 0b0000,
    SoftwareDevelopment = 0b0001,
    ElectronicCommunication = 0b0010,
    Microelectronics = 0b0011,
    MechanicalEngineering = 0b0100,
    EconomicManagement = 0b0101,
}

export {User, StatusCode, Role, Avatar, Major};