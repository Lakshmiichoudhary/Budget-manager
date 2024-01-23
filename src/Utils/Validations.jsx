const validations = (email,password,confirmPassword) => {

    const ifEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)

    if(!ifEmail) return "Enter a valid email"
    if(!isPassword) return "Minimum eight characters, at least one letter and one number"
    if(confirmPassword && password !== confirmPassword)
        return "Password do not match"

    return null;

}

export default validations