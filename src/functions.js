export const noSelect = (e) => {
    e.preventDefault()
}

export const getDate = () => {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return (day + ':' + month + ':' + year);
}