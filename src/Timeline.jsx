import styled from "styled-components";
import colors from "./colors.json";

const yearToTitle = {
  2009: "Shangri La",
  2010: "Gustav III",
  2011: "Freud",
  2012: "På Gränsen",
  2013: "Vive la France",
  2014: "Hadrianus Mur",
  2015: "Bonnie & Clyde",
  2016: "Karl XII",
  2017: "Vlad Spetsaren",
  2018: "Agatha Christie",
  2019: "Cecilia Vasa",
  2020: "Bernadötte",
  2021: "Bernadotte",
};

const tagToColor = (event) => {
  switch (event) {
    case "rehearsal":
      return colors.blue;
    case "show":
      return colors.magenta;
    case "meeting":
      return colors.cyan;
    case "party":
      return colors.green;
    case "tour":
      return colors.orange;
    case "other":
      return colors.violet;
    default:
      return "black";
  }
};

const EventContainer = styled.g`
  opacity: ${({ highlighted }) => (!highlighted ? 0.2 : 1)};
  &:hover p {
    display: block;
  }
`;

const Label = styled.p`
  user-select: none;
  font-size: 2px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${({ even }) => !even && "text-align: right;"}
  ${({ state }) =>
    (state === "active" &&
      `
    overflow: visible;
    white-space: normal;
    font-size: 3px;
    background-color: ${colors.light.bg};
  `) ||
    (state === "passive" && `opacity: 0.5;`)}
`;

const Event = ({
  event,
  year,
  index,
  even,
  tag,
  description,
  setDescription,
}) => {
  const state =
    description === ""
      ? "normal"
      : description === `${year}-${index}`
      ? "active"
      : "passive";
  return (
    <EventContainer
      highlighted={tag === event.tag || tag === ""}
      transform={`translate(0, ${event.day.start})`}
    >
      <rect
        x="-3"
        y="0"
        width="6"
        height={event.day.end - event.day.start + 2}
        fill={tagToColor(event.tag)}
        rx="1"
        onMouseEnter={() => setDescription(`${year}-${index}`)}
        onMouseLeave={() => setDescription("")}
        onTouchStart={() => setDescription(`${year}-${index}`)}
      />
      {even ? (
        <foreignObject x="4" y="-2" width="16" height="200">
          <Label even={even} state={state} xmlns="http://www.w3.org/1999/xhtml">
            {event.beskrivning}
          </Label>
        </foreignObject>
      ) : (
        <foreignObject x="-20" y="-2" width="16" height="200">
          <Label state={state} xmlns="http://www.w3.org/1999/xhtml">
            {event.beskrivning}
          </Label>
        </foreignObject>
      )}
    </EventContainer>
  );
};

const Timeline = ({ index, year, data, tag, description, setDescription }) => (
  <g transform={`translate(${20 + index * 40}, 0)`}>
    <text
      fontSize={4}
      fontWeight="bold"
      textAnchor="middle"
      fill={colors.light.primary}
      transform="translate(0, -7)"
    >
      {year}
    </text>
    <text
      fontSize={5}
      fontWeight="bold"
      textAnchor="middle"
      fill={colors.light.primary}
      transform="translate(0, -2)"
    >
      {yearToTitle[year]}
    </text>
    <line
      x1="0"
      x2="0"
      y1="0"
      y2="395"
      stroke={colors.light.secondary}
      strokeWidth="2"
    />
    {data.map((event, i) => (
      <Event
        key={event.raw}
        year={year}
        index={i}
        event={event}
        even={i % 2 === 0}
        tag={tag}
        description={description}
        setDescription={setDescription}
      />
    ))}
  </g>
);

export default Timeline;
