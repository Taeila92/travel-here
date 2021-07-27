const getDate = (timestamp) => {
  const post_date = timestamp.toDate()
  
  const year = post_date.getFullYear()
  const month = post_date.getMonth()
  const date = post_date.getDate()
  const hour = post_date.getHours();
  const minute = post_date.getMinutes();

  return `${year}.${month+1}.${date} ${hour}:${minute}`;
}

export default getDate;