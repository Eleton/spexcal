import styled from "styled-components";
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
      return "black";
  }
};

const Container = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  gap: 0.5rem;
`;

const Tag = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;
  border: 2px solid ${({ type }) => tagToColor(type)};
  border-radius: 9999px;
  padding: 0.25rem 1rem;
  color: ${({ type }) => tagToColor(type)};
  text-align: center;
  ${({ selected, type }) =>
    selected &&
    `
    color: ${colors.light.bg};
    background-color: ${tagToColor(type)};
  `}
`;

const TagChooser = ({ tag, setTag }) => (
  <Container>
    <Tag
      selected={tag === "rehearsal"}
      onClick={() => setTag("rehearsal")}
      type="rehearsal"
    >
      Genomdrag
    </Tag>
    <Tag selected={tag === "tour"} onClick={() => setTag("tour")} type="tour">
      Turné
    </Tag>
    <Tag
      selected={tag === "party"}
      onClick={() => setTag("party")}
      type="party"
    >
      Fest
    </Tag>
    <Tag selected={tag === "show"} onClick={() => setTag("show")} type="show">
      Föreställning
    </Tag>
    <Tag
      selected={tag === "meeting"}
      onClick={() => setTag("meeting")}
      type="meeting"
    >
      Möte
    </Tag>
    <Tag
      selected={tag === "other"}
      onClick={() => setTag("other")}
      type="other"
    >
      Annat
    </Tag>
  </Container>
);

export default TagChooser;
