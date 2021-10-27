const fs= require('fs')

const userModelJSON = {
    dbUserFileName: "./db/user.json",
    userData: function () {
        return JSON.parse(fs.readFileSync(this.dbUserFileName, 'utf-8'));
    } ,

    userAll: function () {
        return this.userData();
    },

    userSearchByPK: function (id) {
        let users = this.userAll();
        let user = users.find(oneUser => oneUser.id === id);
        return user;
    },

    userSearchByField: function (field,textToSearch) {
        let users = this.userAll();
        let user = users.find(oneUser => oneUser[field] === textToSearch);
        return user;
    },

    userGenerateId:function () {
        let users = this.userAll();
        let newId= users.length +1
        return newId 
    },

    userCreate: function (userData) {
        let users = this.userAll();
        let userNew = {
            id: this.userGenerateId(),
            ...userData
        }
        users.push(userNew);
        fs.writeFileSync(this.dbUserFileName,JSON.stringify(users, null, 4));
        return userNew;
    },

    userDelete: function (id) {
        let users = this.userAll();
        let usersNew = users.filter(oneUser=> oneUser.id !== id)
        fs.writeFileSync(this.dbUserFileName,JSON.stringify(usersNew, null, 4));
        return true;
    }
};

module.exports = userModelJSON;