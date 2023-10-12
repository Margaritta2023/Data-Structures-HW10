class Users {

    constructor (){
        this.usersMap = new Map()
    }
    
    addUsers (user, userId){
        this.usersMap.set(user, userId)
    }

    getUserById(userId) {
        return this.usersMap.get(userId);
      }

    getAllUsers() {
        return Array.from(this.usersMap.values());
      }
    
    removeUser(userId) {
        this.usersMap.delete(userId);
      }
}

const newUser = new Users();

newUser.addUsers(1, { id: 1, name: 'Chloe' });
newUser.addUsers(2, { id: 2, name: 'Kim' });
newUser.addUsers(3, { id: 3, name: 'Kiley' });
console.log(newUser); 

const Kim = newUser.getUserById(2);
console.log(Kim); 

newUser.removeUser(1);
console.log(newUser); 