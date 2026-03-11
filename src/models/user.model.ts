import type { User } from "../types/user.type";

export class UserModel implements User {
  id?: number;
  name: string;
  role: string;

  constructor(data: User) {
    this.id = data.id;
    this.name = data.name;
    this.role = data.role;
  }

  get displayName() {
    return `${this.name} (${this.role})`;
  }
}