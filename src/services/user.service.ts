import { userRepository } from "../repositories/user.repository";
import { UserModel } from "../models/user.model";
import type { User } from "../types/user.type";

export const userService = {
  getAll(): UserModel[] {
    return userRepository.findAll();
  },

  create(user: User) {
    if (!user.name || !user.role) {
      throw new Error("Name and role required");
    }

    userRepository.create(user);
  },

  update(id: number, user: User) {
    userRepository.update(id, user);
  },

  delete(id: number) {
    userRepository.delete(id);
  }
};