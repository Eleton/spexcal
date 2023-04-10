import { useState } from "react";
import styled from "styled-components";
import TagChooser from "./TagChooser";
import Calendar from "./Calendar";
import Graph from "./Graph";
import rawData from "./data.json";
import colors from "./colors.json";

const daysInAYear = 365 + 30;
const padding = 24;

const Main = styled.main`
  padding: 2rem;
  background: ${colors.light.bg};
  color: ${colors.light.primary};
  @media (max-width: 640px) {
    padding: 1rem;
  }
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  max-height: 100vh;
  height: 100%;
  box-sizing: border-box;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Link = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;
  border: 2px solid ${colors.light.primary}};
  border-radius: 9999px;
  padding: 0.25rem 1rem;
  color: ${colors.light.primary};
  text-align: center;
  ${({ selected }) =>
    selected &&
    `
    color: ${colors.light.bg};
    background-color: ${colors.light.primary}};
  `}
`;

const SvgContainer = styled.div`
  cursor: grab;
  overflow: auto;
`;

const data = rawData.slice(0, 12);

const App = () => {
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  // const [clickCoord, setClickCoord] = useState(null);
  const [view, setView] = useState("calendar");

  const selectTag = (newTag) => (newTag === tag ? setTag("") : setTag(newTag));
  const selectDescription = (newDescription) =>
    newDescription === description
      ? setDescription("")
      : setDescription(newDescription);

  return (
    <Main>
      <h1>Spexkalendern</h1>
      <Options>
        <TagChooser tag={tag} setTag={selectTag} />
        <Links>
          <Link
            selected={view === "calendar"}
            onClick={() => setView("calendar")}
          >
            Kalender
          </Link>
          <Link selected={view === "graph"} onClick={() => setView("graph")}>
            Graf
          </Link>
        </Links>
      </Options>
      <SvgContainer
      // onMouseDown={(e) => {
      //   console.log(e.target.scrollLeft);
      //   setClickCoord({
      //     x: e.clientX,
      //     y: e.clientY,
      //     sx: e.target.scrollLeft,
      //     sy: e.target.scrollTop,
      //   });
      // }}
      // onMouseUp={(e) => {
      //   e.target.scrollLeft =
      //     e.target.scrollLeft - (e.clientX - clickCoord.x);
      //   setClickCoord(null);
      // }}
      // onMouseMove={
      //   (e) => {
      //     if (clickCoord !== null) {
      //       e.target.scrollLeft = clickCoord.sx - (e.clientX - clickCoord.x);
      //       console.log(clickCoord.sx, e.clientX, clickCoord.x);
      //     }
      //   }
      //   // console.log(
      //   //   `
      //   // client: ${e.clientX}, ${e.clientY}
      //   // page: ${e.pageX}, ${e.pageY}
      //   // screen: ${e.screenX}, ${e.screenY}
      //   // `
      //   // )
      // }
      >
        {view === "calendar" ? (
          <Calendar
            data={data}
            padding={padding}
            daysInAYear={daysInAYear}
            tag={tag}
            description={description}
            selectDescription={selectDescription}
          />
        ) : (
          <Graph
            data={data}
            padding={padding}
            daysInAYear={daysInAYear}
            tag={tag}
            description={description}
            selectDescription={selectDescription}
          />
        )}
      </SvgContainer>
    </Main>
  );
};

export default App;
