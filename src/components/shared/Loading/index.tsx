import CircularProgress from "@material-ui/core/CircularProgress";

export interface LoadingProps {}

const Loading = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <CircularProgress size={18} />
    </div>
  );
};

export default Loading;
