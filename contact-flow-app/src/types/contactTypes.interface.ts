export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  picture: string;
}

export interface IDContact extends Contact {
  id: string;
}
