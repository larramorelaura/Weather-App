export function getCurrentTime() {
    const now = new Date();
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return now.toLocaleString("en-US", options);
}