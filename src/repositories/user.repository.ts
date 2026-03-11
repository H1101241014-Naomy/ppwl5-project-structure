import { db } from "../config/db";
import type { User } from "../types/user.type";
import { UserModel } from "../models/user.model";

export const userRepository = {
  findAll(): UserModel[] {
    const rows = db.query("SELECT id, name, role FROM users").all() as User[];
    return rows.map(user => new UserModel(user));
  },

  create(user: User) {
    db.query("INSERT INTO users (name, role) VALUES (?, ?)")
      .run(user.name, user.role);
  },

  update(id: number, user: User) {
    db.query("UPDATE users SET name = ?, role = ? WHERE id = ?")
      .run(user.name, user.role, id);
  },

  delete(id: number) {
    db.query("DELETE FROM users WHERE id = ?").run(id);
  }
};