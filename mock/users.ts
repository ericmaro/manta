import { User } from "@/types/user";
import { faker } from '@faker-js/faker';

//generate 5 random users with fake name and email using faker
export const fakeUsers: User[] = [...Array(5)].map((_, index) => ({
    id: index + 1,
    name: faker.name.fullName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    role: index % 2 === 0 ? "admin" : "user",
}));

export const fakeUser: User = {
    id: 1,
    name: faker.name.fullName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    role: "admin",
};