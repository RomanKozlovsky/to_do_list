import RegistrationPage from "../Registration Page/RegistrationPage";

export default function DataBase(){

    const name = 'test name'

    function addNewUser(user){
        console.log(user)
    }

    return (
        <>
            <RegistrationPage addNewUser={addNewUser} name={name}/>
        </>
    )
}