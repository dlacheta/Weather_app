import moment from 'moment';

const groupWeatherByDay = (list) => {
  const days = [];
  list.forEach((item) => {
    const day = moment(item.dt_txt).format('D');
    if (!days[day]) days[day] = [];
    days[day].push(item);
  });

  return days;
};

export default groupWeatherByDay;
