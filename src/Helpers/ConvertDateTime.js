export function formatDate(date) {
  const formated = new Date(date);
  formated.setDate(formated.getDate() + 1);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return formated.toLocaleDateString("en-US", options);
}

export function formatTime(time_24) {
  let hours = parseInt(time_24.slice(0, 2));
  const minutes = time_24.slice(3);
  const suffix = hours > 11 && hours < 24 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;
  return `${hours}:${minutes} ${suffix}`;
}
