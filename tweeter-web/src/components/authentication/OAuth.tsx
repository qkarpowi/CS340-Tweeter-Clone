import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import useToastListener from "../toaster/ToastListenerHook";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  name: string;
  tooltip: string;
  icon: IconProp;
}

const OAuth = (props: Props) => {
    const displayInfoMessageWithDarkBackground = (message: string): void => {
        displayInfoMessage(message, 3000, "text-white bg-primary");
      };

      const { displayInfoMessage } = useToastListener();
    return (
      <>
        <button
          type="button"
          className="btn btn-link btn-floating mx-1"
          onClick={() =>
            displayInfoMessageWithDarkBackground(
              `${props.name} registration is not implemented.`
            )
          }
        >
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={props.tooltip}>{props.name}</Tooltip>}
          >
            <FontAwesomeIcon icon={props.icon} />
          </OverlayTrigger>
        </button>
      </>
    );
}

export default OAuth;