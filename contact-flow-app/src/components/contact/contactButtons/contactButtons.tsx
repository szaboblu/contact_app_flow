import Button from "@/components/common/button";
import { IDContact } from "@/types";

interface ContactButtonsProps {
  contact: IDContact;
  onInfo: (contact: IDContact) => void;
  onMute: (contact: IDContact) => void;
  onCall: (contact: IDContact) => void;
}

export const ContactButtons = ({
  contact,
  onCall,
  onInfo,
  onMute,
}: ContactButtonsProps) => {
  return (
    <div>
      <Button onClick={() => onCall(contact)} label="Call" />
      <Button onClick={() => onMute(contact)} label="Mute" />
      <Button onClick={() => onInfo(contact)} label="Info" />
    </div>
  );
};
