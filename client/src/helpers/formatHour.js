export function formatHour(dt) {
    const date = new Date(dt * 1000);
    const hours = date.getHours();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    return `${formattedHours} ${amPm}`;
  }