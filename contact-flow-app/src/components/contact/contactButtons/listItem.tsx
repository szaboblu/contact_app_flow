import Button from "@/components/common/button";
import { IDContact } from "@/types";

interface ContactButtonListItemProps {
  contact: IDContact;
  onEdit: (contact: IDContact) => void;
  onDelete: (contact: IDContact) => void;
  onFavorite: (contact: IDContact) => void;
}
export const ContactButtonListItem = ({
  contact,
  onEdit,
  onDelete,
  onFavorite,
}: ContactButtonListItemProps) => {
  return (
    <div>
      <Button onClick={() => onEdit(contact)} label="Edit" />
      <Button onClick={() => onFavorite(contact)} label="Favorite" />
      <Button onClick={() => onDelete(contact)} label="Delete" />
    </div>
  );
};
