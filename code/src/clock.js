export const getTimeString = (now) => {
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hour}:${minute}:${seconds}`;
}


const getNextYearDate = (now) => {
    const endOfYearDate = new Date(0)
    endOfYearDate.setUTCFullYear(now.getUTCFullYear() + 1)
    return endOfYearDate;
}

export const getSecondsLeftOfYear = (now) => {
    const startOfNextYear = getNextYearDate(now);
    const startOfNextYearMillis = startOfNextYear.getTime();
    const nowMillis = now.getTime();
    return Math.floor((startOfNextYearMillis - nowMillis) / 1000);
}

export const getMinutesLeftOfYear = (now) => {
    return Math.floor(getSecondsLeftOfYear(now) / 60);
}
export const getHoursLeftOfYear = (now) => {
    return Math.floor(getMinutesLeftOfYear(now) / 60);
}
export const getDaysLeftOfYear = (now) => {
    return Math.floor(getHoursLeftOfYear(now) / 24);
}