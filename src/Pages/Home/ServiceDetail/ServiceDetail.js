import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../../Hooks/useServiceDetail";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const [service] = useServiceDetail(serviceId);
  return (
    <div>
      <h3>Service Details {service.name}</h3>
      <div className="text-center">
        <Link to={`/checkout/${serviceId}`}>
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
