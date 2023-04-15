const fs = require("fs");
const papa = require("papaparse");

const dateToUTC = (year, month, day) =>
  new Date(`${year}-${month}-${day}`).getTime();

const fullDay = 1000 * 60 * 60 * 24;

const years = [
  2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
];

const result = [];

for (const year of years) {
  const text = fs.readFileSync(`./${year}.csv`, "utf-8");

  const { data } = papa.parse(text, { header: true });

  let prevUTC = 0;
  const dataWithUTC = data.map(({ datum, ...rest }) => {
    if (datum.includes("-")) {
      const [startDate, endDate] = datum.split("-");
      const [startDay, startMonth] = startDate.split("/");
      const [endDay, endMonth] = endDate.split("/");
      let startTime, endTime;

      if (dateToUTC(year, startMonth, startDay) > prevUTC) {
        startTime = dateToUTC(year, startMonth, startDay);
      } else {
        startTime = dateToUTC(year + 1, startMonth, startDay);
      }

      if (dateToUTC(year, endMonth, endDay) > prevUTC) {
        endTime = dateToUTC(year, endMonth, endDay);
      } else {
        endTime = dateToUTC(year + 1, endMonth, endDay);
      }

      prevUTC = endTime;

      return {
        ...rest,
        datum,
        time: { start: startTime, end: endTime + fullDay },
        day: {
          start: (startTime - dateToUTC(year, 9, 1)) / fullDay,
          end: (endTime - dateToUTC(year, 9, 1)) / fullDay,
        },
      };
    } else {
      const [day, month] = datum.split("/");

      let time;

      if (dateToUTC(year, month, day) > prevUTC) {
        time = dateToUTC(year, month, day);
      } else {
        time = dateToUTC(year + 1, month, day);
      }

      prevUTC = time;
      return {
        ...rest,
        datum,
        time: {
          start: time,
          end: time + fullDay,
        },
        day: {
          start: (time - dateToUTC(year, 9, 1)) / fullDay,
          end: (time - dateToUTC(year, 9, 1)) / fullDay,
        },
      };
    }
  });
  const res = { year, time: dateToUTC(year, 9, 1), data: dataWithUTC };
  result.push(res);
}

console.log(result);

fs.writeFileSync("../data.json", JSON.stringify(result));
