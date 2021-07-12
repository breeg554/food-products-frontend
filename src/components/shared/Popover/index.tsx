import Button from "@material-ui/core/Button";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Popover from "@material-ui/core/Popover";
import { useAuth } from "../../../contexts/authContext";
export interface MainMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  open: boolean;
}

const CustomPopover = ({ anchorEl, handleClose, open }: MainMenuProps) => {
  const { logOut } = useAuth();

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Button startIcon={<InboxIcon />} onClick={logOut}>
        <span>Wyloguj się</span>
      </Button>
    </Popover>
  );
};

export default CustomPopover;
