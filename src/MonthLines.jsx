import colors from "./colors.json";

const MonthLines = ({ padding }) => (
  <>
    <text
      fill={colors.light.secondary}
      fontWeight="bold"
      fontSize="6"
      transform={`translate(-${padding}, ${6})`}
    >
      Sept
    </text>
    <text
      fill={colors.light.secondary}
      fontWeight="bold"
      fontSize="6"
      transform={`translate(-${padding}, ${6 + 30})`}
    >
      Okt
    </text>
    <text
      fill={colors.light.secondary}
      fontWeight="bold"
      fontSize="6"
      transform={`translate(-${padding}, ${6 + 30 + 31})`}
    >
      Nov
    </text>
    <text
      fill={colors.light.secondary}
      fontWeight="bold"
      fontSize="6"
      transform={`translate(-${padding}, ${6 + 30 + 31 + 30})`}
    >
      Dec
    </text>
    <text
      fill={colors.light.secondary}
      fontWeight="bold"
      fontSize="6"
      transform={`translate(-${padding}, ${6 + 30 + 31 + 30 + 31})`}
    >
      Jan
    </text>
    <text
      fill={colors.light.secondary}
      fontWeight="bold"
      fontSize="6"
      transform={`translate(-${padding}, ${6 + 30 + 31 + 30 + 31 + 31})`}
    >
      Feb
    </text>
    <text
      fill={colors.light.secondary}
      fontWeight="bold"
      fontSize="6"
      transform={`translate(-${padding}, ${6 + 30 + 31 + 30 + 31 + 31 + 28})`}
    >
      Mars
    </text>
    <text
      fill={colors.light.secondary}
      fontWeight="bold"
      fontSize="6"
      transform={`translate(-${padding}, ${
        6 + 30 + 31 + 30 + 31 + 31 + 28 + 31
      })`}
    >
      April
    </text>
    <text
      fill={colors.light.secondary}
      fontWeight="bold"
      fontSize="6"
      transform={`translate(-${padding}, ${
        6 + 30 + 31 + 30 + 31 + 31 + 28 + 31 + 30
      })`}
    >
      Maj
    </text>
    <text
      fill={colors.light.secondary}
      fontWeight="bold"
      fontSize="6"
      transform={`translate(-${padding}, ${
        6 + 30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31
      })`}
    >
      Juni
    </text>
    <text
      fill={colors.light.secondary}
      fontWeight="bold"
      fontSize="6"
      transform={`translate(-${padding}, ${
        6 + 30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31 + 30
      })`}
    >
      Juli
    </text>
    <text
      fill={colors.light.secondary}
      fontWeight="bold"
      fontSize="6"
      transform={`translate(-${padding}, ${
        6 + 30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31 + 30 + 31
      })`}
    >
      Aug
    </text>
    <text
      fill={colors.light.secondary}
      fontWeight="bold"
      fontSize="6"
      transform={`translate(-${padding}, ${
        6 + 30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31
      })`}
    >
      Sept
    </text>

    <line x1={-padding} x2="100000" y1="0" y2="0" stroke={colors.light.bgHl} />
    <line
      x1={-padding}
      x2="100000"
      y1={30}
      y2={30}
      stroke={colors.light.bgHl}
    />
    <line
      x1={-padding}
      x2="100000"
      y1={30 + 31}
      y2={30 + 31}
      stroke={colors.light.bgHl}
    />
    <line
      x1={-padding}
      x2="100000"
      y1={30 + 31 + 30}
      y2={30 + 31 + 30}
      stroke={colors.light.bgHl}
    />
    <line
      x1={-padding}
      x2="100000"
      y1={30 + 31 + 30 + 31}
      y2={30 + 31 + 30 + 31}
      stroke={colors.light.bgHl}
    />
    <line
      x1={-padding}
      x2="100000"
      y1={30 + 31 + 30 + 31 + 31}
      y2={30 + 31 + 30 + 31 + 31}
      stroke={colors.light.bgHl}
    />
    <line
      x1={-padding}
      x2="100000"
      y1={30 + 31 + 30 + 31 + 31 + 28}
      y2={30 + 31 + 30 + 31 + 31 + 28}
      stroke={colors.light.bgHl}
    />
    <line
      x1={-padding}
      x2="100000"
      y1={30 + 31 + 30 + 31 + 31 + 28 + 31}
      y2={30 + 31 + 30 + 31 + 31 + 28 + 31}
      stroke={colors.light.bgHl}
    />
    <line
      x1={-padding}
      x2="100000"
      y1={30 + 31 + 30 + 31 + 31 + 28 + 31 + 30}
      y2={30 + 31 + 30 + 31 + 31 + 28 + 31 + 30}
      stroke={colors.light.bgHl}
    />
    <line
      x1={-padding}
      x2="100000"
      y1={30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31}
      y2={30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31}
      stroke={colors.light.bgHl}
    />
    <line
      x1={-padding}
      x2="100000"
      y1={30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31 + 30}
      y2={30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31 + 30}
      stroke={colors.light.bgHl}
    />
    <line
      x1={-padding}
      x2="100000"
      y1={30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31 + 30 + 31}
      y2={30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31 + 30 + 31}
      stroke={colors.light.bgHl}
    />
    <line
      x1={-padding}
      x2="100000"
      y1={30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31}
      y2={30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31}
      stroke={colors.light.bgHl}
    />
    <line
      x1={-padding}
      x2="100000"
      y1={30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30}
      y2={30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30}
      stroke={colors.light.bgHl}
    />
  </>
);

export default MonthLines;
