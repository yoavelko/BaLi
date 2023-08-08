function timeDate() {
    const date = new Date();
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    let hour = date.getHours();
    let min = date.getMinutes();
    if (hour.toString().length < 2) {
        hour = `0${date.getHours()}`
    }
    if (min.toString().length < 2) {
        min = `0${date.getMinutes()}`
    }

    const today = dd + '/' + mm + '/' + yyyy;
    const time = hour + ':' + min;

    return { date: today, time }
}

export default timeDate