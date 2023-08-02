function TimeComapre(sent) {

    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    if (hour.toString().length < 2) {
        hour = `0${date.getHours()}`
    }
    if (min.toString().length < 2) {
        min = `0${date.getMinutes()}`
    }
    const time = hour + ':' + min
    let minDifference = parseInt(time.slice(3, 5)) - parseInt(sent.slice(3, 5));
    let hourDifference = parseInt(time.slice(0, 2)) - parseInt(sent.slice(0, 2));
    if (hourDifference === 1) {
        hourDifference = 'שעה'
    } else if (hourDifference === 2) {
        hourDifference = 'שעתיים'
    }
    if (minDifference === 1) {
        minDifference = 'דקה'
    } else if (minDifference < 0) {
        minDifference = 60 + minDifference
    }


    if (sent.slice(0, 2) === time.slice(0, 2)) {
        if (minDifference === 'דקה') {
            return 'נשלח לפני דקה'
        } else {
            return `נשלח לפני ${minDifference} דקות`
        }
    } else {
        if (hourDifference === 'שעה') {
            if (minDifference === 'דקה') {
                return `נשלח לפני שעה ודקה`
            } else {
                return `נשלח לפני שעה ו${minDifference} דקות`
            }
        } else if (hourDifference === 'שעתיים') {
            if (minDifference === 'דקה') {
                return `נשלח לפני שעתיים ודקה`
            } else {
                return `נשלח לפני שעתיים ו${minDifference} דקות`
            }
        } else {
            if (minDifference === 'דקה') {
                return `נשלח לפני ${hourDifference} שעות ודקה`
            } else {
                return `נשלח לפני ${hourDifference} שעות ו${minDifference} דקות`
            }
        }
    }
}


export default TimeComapre