const registerServices = (data: any) => {
    const { birtshday,
        fullname,
        mail,
        password,
        passwordSecond,
        phone } = data

    if (birtshday &&
        fullname &&
        mail &&
        password &&
        passwordSecond &&
        password === passwordSecond &&
        phone) console.log("esta todo")
        return true

}
export default registerServices