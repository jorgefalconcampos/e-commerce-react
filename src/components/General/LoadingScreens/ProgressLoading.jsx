import ProgressBar from "react-bootstrap/ProgressBar";

const ProgressLoading = () => {
  const now = 60;
  return (
    <>
      <ProgressBar animated now={now} label={`${now}%`} visuallyHidden />
    </>
  );
};

export default ProgressLoading;