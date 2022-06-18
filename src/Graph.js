import colors from "./colors.json";

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
      return colors.light.primary;
  }
};

const Bubbles = ({ data, tag, highlighted }) => (
  <>
    {data.map((d, i) => (
      <circle
        key={i}
        cx={16 + i * 8}
        cy={60 - 4 * d}
        r="2"
        fill={tagToColor(tag)}
        opacity={highlighted !== "" && highlighted !== tag ? 0.2 : 1}
      />
    ))}
    <polyline
      points={data.map((d, i) => `${16 + i * 8}, ${60 - 4 * d}`).join(" ")}
      fill="none"
      stroke={tagToColor(tag)}
      opacity={highlighted === "" ? 0.5 : highlighted === tag ? 1 : 0.2}
    />
  </>
);

const Graph = ({ data, tag }) => {
  const years = data.map(({ year }) => year);
  const rehearsal = data.map((year) =>
    year.data.reduce(
      (prev, next) => prev + (next.tag === "rehearsal" ? 1 : 0),
      0
    )
  );
  const tour = data.map((year) =>
    year.data.reduce((prev, next) => prev + (next.tag === "tour" ? 1 : 0), 0)
  );
  const party = data.map((year) =>
    year.data.reduce((prev, next) => prev + (next.tag === "party" ? 1 : 0), 0)
  );
  const show = data.map((year) =>
    year.data.reduce((prev, next) => prev + (next.tag === "show" ? 1 : 0), 0)
  );
  const meeting = data.map((year) =>
    year.data.reduce((prev, next) => prev + (next.tag === "meeting" ? 1 : 0), 0)
  );
  const other = data.map((year) =>
    year.data.reduce((prev, next) => prev + (next.tag === "other" ? 1 : 0), 0)
  );

  return (
    <svg width={920} height={600} viewBox={`0 0 128 60`}>
      <line x1="8" x2="120" y1="60" y2="60" stroke={colors.light.primary} />
      <line x1="8" x2="8" y1="60" y2="-10" stroke={colors.light.primary} />
      <line
        x1="6"
        x2="10"
        y1={60 - 4 * 5}
        y2={60 - 4 * 5}
        stroke={colors.light.primary}
      />
      <text
        transform={`translate(4, ${60 - 4 * 5})`}
        fontSize="4"
        textAnchor="end"
        alignmentBaseline="middle"
        fill={colors.light.primary}
      >
        5
      </text>
      <line
        x1="6"
        x2="10"
        y1={60 - 4 * 10}
        y2={60 - 4 * 10}
        stroke={colors.light.primary}
      />
      <text
        transform={`translate(4, ${60 - 4 * 10})`}
        fontSize="4"
        textAnchor="end"
        alignmentBaseline="middle"
        fill={colors.light.primary}
      >
        10
      </text>
      <line
        x1="6"
        x2="10"
        y1={60 - 4 * 15}
        y2={60 - 4 * 15}
        stroke={colors.light.primary}
      />
      <text
        transform={`translate(4, ${60 - 4 * 15})`}
        fontSize="4"
        textAnchor="end"
        alignmentBaseline="middle"
        fill={colors.light.primary}
      >
        15
      </text>
      <Bubbles data={rehearsal} tag="rehearsal" highlighted={tag} />
      <Bubbles data={tour} tag="tour" highlighted={tag} />
      <Bubbles data={party} tag="party" highlighted={tag} />
      <Bubbles data={show} tag="show" highlighted={tag} />
      <Bubbles data={meeting} tag="meeting" highlighted={tag} />
      <Bubbles data={other} tag="other" highlighted={tag} />
      {years.map((year, i) => (
        <text
          key={year}
          transform={`translate(${16 + i * 8}, 64) rotate(-45)`}
          fontSize="4"
          textAnchor="end"
        >
          {year}
        </text>
      ))}
    </svg>
  );
};

export default Graph;
