export interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  picture: string;
}

export interface IDContact extends Contact {
  id: number;
}
