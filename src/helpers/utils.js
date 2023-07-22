import { add } from "date-fns";

export const showToast = (props) => {
    window.$(document).Toasts('create', props)
}

export const generateHoursMinutes = () => {
    const hours = [...Array(24).keys()];
    const minutes = [...Array(60).keys()];

    let convertedTime = [];
    for (const h of hours) {
        for (const m of minutes) {
            convertedTime.push(h + ":" + m);
        }
    }
    return convertedTime;
};

export const generateDays = (type, date = new Date()) => {
    if (type === "Day") {
        return [date]
    }
    return Array(7).fill(new Date(date)).map((el, idx) =>
        new Date(el.setDate(el.getDate() - el.getDay() + idx)))
}

export const generateHours = (date) => {
    const initialTime = new Date(date.setHours(0, 0, 0, 0));

    let hrs = [];
    for (let i = 8; i <= 20; i++) {
        hrs.push(add(initialTime, { hours: i }));
    }

    return hrs;
};

export const generateEventSlots = () => {
    return ["00", "10", "20", "30", "40", "50"];
};

export const findBookedSlots = (data, hour, slot) => {
    let res = [];
    data.map(function (dd) {
        if (
            dd.EventParseStatus.event_hour === hour &&
            dd.EventParseStatus.event_start_minute === slot
        ) {
            res.push(dd);
        }
        return false;
    });
    return res;
};

export const generateAppointmentTop = ({
    event_hour,
    event_start_minute,
}) => {
    let minutes =
        parseInt(event_hour) * 0 + parseInt(event_start_minute) * 2;
    return minutes;
};

export const generateAppointmentHeight = ({
    event_end_minute,
    event_start_minute,
}) => {
    let minutes =
        (parseInt(event_end_minute) - parseInt(event_start_minute)) * 1.7;
    return minutes;
};