import { useLocation } from "react-router-dom";
function Qcard() {
  const location = useLocation();
  const state = location.state;
  return (
    <>
      <h1>{state}</h1>
      <h1>a</h1>
    </>
  );
}
export default Qcard;
