
export const readLocalStorage = async (todo: any[]) => {
    let element: any;
    const totalObject: any = {};

    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        const saved: any = await localStorage.getItem(element);

         if (saved !== null)  totalObject[element] = JSON.parse(saved);

    }

    return totalObject
}
export const writedLocalStorage = (props: any) => {
    // const { token, islogin, user, id } = props

    const keys = Object.keys(props);

    for (const key of keys) {
        localStorage.setItem(key, JSON.stringify(props[key]));
    }

    return true

}


