export class User {
    login: string;
    name: string;
    html_url: string;
    created_at: string;
    location: string;
    company: string;
    email: string;
    public_repos: number;
    avatar_url: string;
    repos: Array<Object>;
}

export class SearchAns {
    total_count: number;
    incomplete_results: boolean;
    items: User[];
}
