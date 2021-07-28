const getDate = (timestamp) => {
  console.log(timestamp)
  const post_date = timestamp.toDate()
  console.log(post_date)
  
  const year = post_date.getFullYear()
  const month = post_date.getMonth()
  const date = post_date.getDate()
  const hour = post_date.getHours();
  const minute = post_date.getMinutes();

  return `${year}.${month+1}.${date} ${hour}:${minute}`;
}

export default getDate;