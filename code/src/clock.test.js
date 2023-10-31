import { getSecondsLeftOfYear, getTimeString, getMinutesLeftOfYear} from "./clock";

test('getTimeString formats time string correctly for 10:20:30', () => {
    const now = new Date(0, 0, 0, 10, 20, 30);
    const timeString = getTimeString(now);
    expect(timeString).toBe('10:20:30');
});

test('getTimeString formats time string correctly for 01:01:01', () => {
    const now = new Date(0, 0, 0, 1, 1, 1);
    const timeString = getTimeString(now);
    expect(timeString).toBe('01:01:01');
});
test('getSecondsLeftOfYear returns the correct amount of seconds', () => {
    const now = new Date("2022-12-31T23:00:00.000Z");
    const timeString = getSecondsLeftOfYear(now);
    expect(timeString).toBe(3600);
});
test('getMinutesLeftOfYear returns the correct amount of minutes', () => {
    const now = new Date("2022-12-31T23:00:00.000Z");
    const timeString = getMinutesLeftOfYear(now);
    expect(timeString).toBe(60);
});

