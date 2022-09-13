const getIDbyTime = () => `${Date.now()}`;

function getTimeToShow(createdTime: number | string) {
    const timer = new Date(Number(createdTime));
    return {
        minute: parseTime(timer.getMinutes()),
        hour: parseTime(timer.getHours()),
        day: timer.getDate(),
        month: timer.getMonth() + 1,
        year: timer.getFullYear(),
    };
}

const parseTime = (time: number) => (time - 10 < 0 ? `0${time}` : time);

export { getIDbyTime, getTimeToShow, parseTime };
