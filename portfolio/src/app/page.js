import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCamera } from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
export default function HomePage() {
  return (
    <div className="flex space-x-4 text-2xl">
      <FontAwesomeIcon icon={faHome} />
      <FontAwesomeIcon icon={faUser} />
      <FontAwesomeIcon icon={faCamera} />
      <FontAwesomeIcon icon={faWhatsapp} />
    </div>
  );
}
