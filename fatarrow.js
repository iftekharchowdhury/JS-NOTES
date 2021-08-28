// fat arrow func

const add = (a,b) => {
    const sum = a + b;
    return sum;
}


const team = {

    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function () {
        return this.members.map((member) =>{
            return `${member} is on team ${this.teamName}`
        });
    }


}
console.log(team.teamSummary());
// console.log(add(2,2));