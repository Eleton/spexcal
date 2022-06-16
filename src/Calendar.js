import Timeline from "./Timeline";
import MonthLines from "./MonthLines";

const Calendar = ({
  data,
  padding,
  daysInAYear,
  tag,
  description,
  selectDescription,
}) => (
  <svg
    width={40 * data.length * 6 + padding * 6}
    height={daysInAYear * 6}
    viewBox={`${-padding} ${-1.2 * padding} ${40 * data.length + 2 * padding} ${
      daysInAYear + 2 * padding
    }`}
    preserveAspectRatio="xMinYMid slice"
  >
    <MonthLines padding={padding} />
    {data.map((d, index) => (
      <Timeline
        key={d.time}
        index={index}
        year={d.year}
        data={d.data}
        tag={tag}
        description={description}
        setDescription={selectDescription}
      />
    ))}
  </svg>
);

export default Calendar;
