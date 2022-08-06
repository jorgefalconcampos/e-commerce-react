// componentes
import Spinner from "react-bootstrap/Spinner";

const LoadingScreen = ({ classOptions, variant, size }) => {
  return (
    <>
      <Spinner
        className={classOptions}
        variant={variant}
        size={size}
        animation="border"
        role="status"
      >
        <span className="visually-hidden">Cargando</span> {/* a11y */}
      </Spinner>
    </>
  );
};

export default LoadingScreen;
