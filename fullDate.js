export const getCurrentDate = (newDate) => {
    // return (newDate.getDate() < 10 ? '0' : '') + newDate.getDate() + '.' + (newDate.getMonth() < 10 ? '0' : '') + newDate.getMonth() + '.' + `${newDate.getFullYear() - 2000} ${newDate.getHours()}:` + (newDate.getMinutes() < 10 ? '0' : '') + newDate.getMinutes()
    // return format(new Date(task.created_at), 'dd/MM/yyyy hh:mm');
}