import { User } from "./user.js"

export async function appHandler() {

    fetch('https://api.github.com/users/abelroland')
        .then(res => res.json())
        .then(payload => {

            const user = new User(payload);
            user.populate();

            console.log(`login: ${user.login} repos: ${user.repos_url}`);

        })
        .catch(err => console.error(err))

}