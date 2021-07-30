class Github {
    constructor() {
        this.client_id = 'b6d3b5592989d172aeba';
        this.client_secret = 'f2494c2623810c629c98e808f33f6c256b6dcff2';

        this.repos_count = 5;
        this.repos_sort = 'created: asc';
        
    }

    async getUser(user){

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();


        return {

            profile,
            repos
        }
    }
}