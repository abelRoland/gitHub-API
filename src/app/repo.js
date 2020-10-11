export class Repo {
    id = null;
    name = '';
    homepage = '';
    html_url = '';
    fork = false;
    created_at = '';

    constructor(repoData) {
        Object.assign(this, repoData);
    }

    render() {
        const repo = document.createElement('div');
        repo.setAttribute('class', 'repo');

        const h3 = document.createElement('h3');
        h3.className = 'repoName';
        h3.innerHTML = `Repository name: ${this.name}`;

        const h4 = document.createElement('h4');
        const date = this.created_at.substring(0, this.created_at.indexOf('T'));
        h4.innerHTML = `Created at:  ${date}`;

        const anchorEl = document.createElement('a');
        anchorEl.className = 'aEl';
        anchorEl.innerHTML = 'homepage';
        anchorEl.href = this.homepage;
        anchorEl.target= "_blank";

        const anchorGithub = document.createElement('a');
        anchorGithub.className = 'aEl';
        anchorGithub.innerHTML = 'repository';
        anchorGithub.href = this.html_url;
        anchorGithub.target= "_blank"

        repo.appendChild(h3);
        repo.appendChild(h4);

        repo.appendChild(anchorEl);
        repo.appendChild(anchorGithub);

        return repo;

    }

}