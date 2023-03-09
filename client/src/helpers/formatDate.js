export function formatDate(dt){
    const date= new Date(dt * 1000);
    const formattedDate= date.toLocaleString("en-US", {weekday:"long", month: "short", day: "numeric"});
    return formattedDate;
}