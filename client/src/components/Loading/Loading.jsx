import Loader from "react-loader-spinner";
const style = {
  textAlign: "center",
  marginTop: "1rem",
};
export default function Loading({ width, height }) {
  return (
    // <div style={style}>
    <Loader
      type="Oval"
      color="#3d66ba"
      height={width}
      width={height}
      timeout={10000}
      style={style}
    />
    // </div>
  );
}
