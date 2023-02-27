module.exports = {
  //时间扩展

  currentTime() {
    return getTime();
  },
  get timeProp() {
    return getTime();
  },
};

function getTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let nowTime =
    year +
    "-" +
    month +
    "-" +
    (date > 9 ? date : "0" + date) +
    " " +
    hour +
    ":" +
    (minute > 9 ? minute : "0" + minute) +
    ":" +
    (second > 9 ? second : "0" + second);
  return nowTime;
}
