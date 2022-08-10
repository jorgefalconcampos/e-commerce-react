// librerías/dependencias
import { useFormik } from "formik";
// import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import RBForm from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/esm/Badge";

const validate = (values) => {
  const errors = {};
  if (!values.first_name) {
    errors.first_name = "El nombre es requerido.";
  } else if (values.first_name.length > 25) {
    errors.first_name = "Debe tener 25 caracteres o menos.";
  }

  if (!values.last_name) {
    errors.last_name = "Los apellidos son requeridos.";
  } else if (values.last_name.length > 30) {
    errors.last_name = "Debe tener 30 caracteres o menos.";
  }

  if (!values.email) {
    errors.email = "El email es requerido.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Dirección de email inválida";
  }

  if (!values.phone) {
    errors.phone = "El teléfono celular es requerido.";
  } else if (!/^(\+)?([ 0-9]){10,16}$/i.test(values.phone)) {
    errors.phone = "Número no válido.";
  }

  if (!values.address) {
    errors.address = "La dirección es requerida.";
  } else if (values.address.length < 30) {
    errors.address = "Debe tener al menos 30 caracteres.";
  }

  return errors;
};

const MyForm = ({ greatTotal, handleSubmit }) => {

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
    },
    validate,
    onSubmit: (values, {resetForm}) => {
      handleSubmit(values);
      resetForm();
    },
  });

  return (
    <>
      <Card className="bg-light rounded pt-2 pb-1 px-2 ">
        <Card.Body>
          <RBForm onSubmit={formik.handleSubmit}>
            <RBForm.Group className="" onSubmit={formik.handleSubmit}>
              <Row className="my-2">
                <Col xs={3} sm={2}>
                  <RBForm.Label htmlFor="first_name" className="pt-1">
                    Nombre(s)
                  </RBForm.Label>
                </Col>
                <Col xs={9} sm={10}>
                  <RBForm.Control
                    id="first_name"
                    name="first_name"
                    type="text"
                    autoComplete="given-name"
                    aria-describedby="first_name_desc"
                    placeholder="Escribe tu(s) nombre(s)"
                    onChange={formik.handleChange}
                    value={formik.values.first_name}
                  />

                  {/* error message for first name */}
                  <Row className="mt-1">
                    {formik.errors.first_name ? (
                      <div id="first_name_desc" className="item-cat-detail">
                        {formik.errors.first_name}
                      </div>
                    ) : null}
                  </Row>
                </Col>
              </Row>
              <Row className="py-2">
                <Col xs={3} sm={2}>
                  <RBForm.Label htmlFor="last_name" className="pt-1">
                    Apellidos
                  </RBForm.Label>
                </Col>
                <Col xs={9} sm={10}>
                  <RBForm.Control
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="family-name"
                    aria-describedby="last_name_desc"
                    placeholder="Escribe tus apellidos"
                    onChange={formik.handleChange}
                    value={formik.values.last_name}
                  />

                  {/* error message for last name */}
                  <Row className="mt-1">
                    {formik.errors.last_name ? (
                      <div id="last_name_desc" className="item-cat-detail">
                        {formik.errors.last_name}
                      </div>
                    ) : null}
                  </Row>
                </Col>
              </Row>

              <Row className="py-2">
                <Col xs={3} sm={2}>
                  <RBForm.Label htmlFor="email" className="pt-1">
                    Email
                  </RBForm.Label>
                </Col>
                <Col xs={9} sm={10}>
                  <RBForm.Control
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    aria-describedby="email_desc"
                    placeholder="email@ejemplo.xyz"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />

                  {/* error message for email */}
                  <Row className="mt-1">
                    {formik.errors.email ? (
                      <div id="email_desc" className="item-cat-detail">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </Row>
                </Col>
              </Row>

              <Row className="py-2">
                <Col xs={3} sm={2}>
                  <RBForm.Label htmlFor="phone" className="pt-1">Celular</RBForm.Label>
                </Col>
                <Col xs={9} sm={10}>
                  <RBForm.Control
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    aria-describedby="phone_desc"
                    placeholder="+52 01 2345 6789"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />

                  {/* error message for phone */}
                  <Row className="mt-1">
                    {formik.errors.phone ? (
                      <div id="phone_desc" className="item-cat-detail">
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </Row>
                </Col>
              </Row>

              <Row className="py-2">
                <Col xs={3} sm={2}>
                  <RBForm.Label htmlFor="address" className="pt-1">Dirección</RBForm.Label>
                </Col>
                <Col xs={9} sm={10}>
                  <RBForm.Control
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="street-address"
                    aria-describedby="address_desc"
                    placeholder="Plaza de la Constitución S/N, Centro, Cuauhtémoc, 06010 Ciudad de México, CDMX"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />

                  {/* error message for address */}
                  <Row className="mt-1">
                    {formik.errors.address ? (
                      <div id="address_desc" className="item-cat-detail">
                        {formik.errors.address}
                      </div>
                    ) : null}
                  </Row>
                </Col>
              </Row>

              <Badge bg="success" className="my-3 item-eligibility">
                El costo total de tu compra (envío incluido) es de ${greatTotal}
              </Badge>

              <Button
                variant="primary"
                type="submit"
                className="mt-3 mb-2 p-2 container-fluid"
              >
                Generar orden
              </Button>
            </RBForm.Group>
          </RBForm>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyForm;
