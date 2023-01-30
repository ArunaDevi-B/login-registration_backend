const registration = require('../Data/registration');
const bcrypt = require('bcrypt');

class UserService {
    async registerUser(userData) {
        try {
            if(userData.firstName === "" || userData.emailId === "" || userData.password === "" ){
                console.log('Enter valid FirstName, EmailID and Password');
                return false;
            }
            const hashedPassword = await bcrypt.hash(userData.password, 5);
            userData.password = hashedPassword;
            const register = await new registration(userData).save();
            return;
        } catch (error) {
            console.log('error in registerUser', error);
        }
    };
    
    async loginUser(userData) {
        try {
            const loginList = await registration.find({emailId: userData.emailId});
            console.log(loginList);
            const match = await bcrypt.compare(userData.password,loginList[0].password);
            console.log(match);
            if(userData.emailId !="" && match == true){
                console.log('its a match', loginList);

                return loginList;
            }
                console.log("Kindly enter the correct login details");
                return false;
            
        } catch (error) {
            console.log('error in loginUser', error);
        }
    }

}

module.exports = new UserService();