class Article {
    id: string;
    title: string;
    description: string;
    statusCode: ArticleStatus;
    authorId: string;
    keyword: string;
    views: number;
    likes: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;

    constructor(
        id: string,
        title: string,
        description: string,
        statusCode: ArticleStatus,
        authorId: string,
        keyword: string,
        views: number,
        likes: number,
        createdAt: Date,
        updatedAt: Date | null,
        deletedAt: Date | null,
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.statusCode = statusCode;
        this.authorId = authorId;
        this.keyword = keyword;
        this.views = views;
        this.likes = likes;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    static empty() {
        return new Article(
            '',
            '',
            '',
            ArticleStatus.Draft,
            '',
            '',
            0,
            0,
            new Date(),
            null,
            null,
        );
    }

    static testData() {
        return new Article(
            'uniqueId123',
            'Sample Article',
            'Some description text about the article, which, should be a test data, and should be long enough to be displayed in the article list.',
            ArticleStatus.Published,
            'authorId456',
            'technology',
            100,
            50,
            new Date(),
            new Date(),
            null
        )
    }
}

enum ArticleStatus {
    Draft = 0b00,
    Published = 0b01,
    Deleted = 0b10,
    Blocked = 0b11,
}

const articleStatuses = [
    {value: ArticleStatus.Draft, label: '草稿'},
    {value: ArticleStatus.Published, label: '已发布'},
    {value: ArticleStatus.Deleted, label: '已删除'},
    {value: ArticleStatus.Blocked, label: '已屏蔽'},
];

export {Article, ArticleStatus, articleStatuses};