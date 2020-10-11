import { Repo } from "./repo.js";

export class User {

    login = '';
    avatar_url = '';
    bio = null;
    email = null;
    repos_url = '';
    public_repos = null;

    repos = [];

    constructor(userData) {
        Object.assign(this, userData)
    }

    async populate() {
        debugger
        try {
            const res = await fetch(this.repos_url);
            const repoData = await res.json();
            repoData.forEach(repo => this.repos.push(new Repo(repo)));
            this.repos.sort((a, b) => (Date.parse(b.created_at) - Date.parse(a.created_at)));
            const preparedRepoData = this;
            preparedRepoData.render();
            preparedRepoData.repos.forEach(item => console.log(item));
        } catch (err) {
            return console.log(err);
        }
    }

    render() {

        const img = document.createElement('img');
        img.className = 'imageBio';
        img.src = this.avatar_url;

        const h1 = document.createElement('h1');
        h1.innerHTML = `About me`;

        const h2 = document.createElement('h2');
        h2.innerHTML = `GitHub username: ${this.login}`;

        const p = document.createElement('p');
        p.className = 'bioText';
        p.innerHTML = `${this.bio}`;

        const user_info = document.getElementById('userHero');
        user_info.appendChild(h1);
        user_info.appendChild(h2);
        user_info.appendChild(img);
        user_info.appendChild(p);

        const repo_holder = document.getElementById('repo_holder');

        this.repos.forEach(item => {
            repo_holder.appendChild(item.render());
        })

    }

}