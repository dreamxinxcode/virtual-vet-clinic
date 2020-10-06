import React from "react";
import "./CancelBooking.scss";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

function CancelBooking(props) {
  const [open, setOpen] = React.useState(false);
  const { cancelBooking } = props;

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={
        <Button className="close-booking">
          <svg
            height="365pt"
            viewBox="0 0 365.71733 365"
            width="365pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#f44336">
              <path d="m356.339844 296.347656-286.613282-286.613281c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769532 0 45.25l286.613281 286.613282c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082032c12.523438-12.480468 12.523438-32.75.019532-45.25zm0 0" />
              <path d="m295.988281 9.734375-286.613281 286.613281c-12.5 12.5-12.5 32.769532 0 45.25l15.082031 15.082032c12.503907 12.5 32.769531 12.5 45.25 0l286.632813-286.59375c12.503906-12.5 12.503906-32.765626 0-45.246094l-15.082032-15.082032c-12.5-12.523437-32.765624-12.523437-45.269531-.023437zm0 0" />
            </g>
          </svg>
        </Button>
      }
    >
      <Header icon>
        <Icon name="archive" />
        DELETE
      </Header>
      <Modal.Content>
        <h3>Do you want to delete this appointment?</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button
          basic
          color="red"
          inverted
          onClick={() => {
            setOpen(false);
          }}
        >
          <Icon name="remove" /> No
        </Button>
        <Button
          color="green"
          inverted
          onClick={() => {
            console.log("MODAL PRESSED");
            cancelBooking();
            setOpen(false);
            window.location.reload();
          }}
        >
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default CancelBooking;
