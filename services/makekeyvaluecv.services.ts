const makekeyvaluecv = (props: any) => {
    return props?.map((item: any) => {
        return Object.entries(item);
    });
}

export default makekeyvaluecv