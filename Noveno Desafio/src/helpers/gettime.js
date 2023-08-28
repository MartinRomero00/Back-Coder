export const showArgentinaDateTime = () => {
    const now = new Date();
    const argentinaOffset = -3;
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const argentinaTime = new Date(utcTime + (argentinaOffset * 3600000));
  
    const formattedDateTime = argentinaTime.toISOString().replace('T', ' ').slice(0, 19);
    return formattedDateTime;
  };