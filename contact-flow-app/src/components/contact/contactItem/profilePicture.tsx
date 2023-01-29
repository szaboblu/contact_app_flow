import React from "react";

interface ProfilePictureProps {
  picture: string;
}

export const ProfilePicture = ({ picture }: ProfilePictureProps) => {
  return (
    <div>
      <h2>Profile Picture</h2>
      <image>{picture}</image>
    </div>
  );
};
