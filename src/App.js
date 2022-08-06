import styled from "styled-components";

const App = () => {
  return (
    <Father>
      <Box bgColor="tomato" />
      <Circle bgColor="teal" />
    </Father>
  );
};

export default App;

const Father = styled.div`
  display: flex;
  flex: 1;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
`;
const Circle = styled(Box)`
  border-radius: 100px;
`;
