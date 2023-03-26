import { faker } from '@faker-js/faker';

export type User = { id: string; content: string; age: number };

const createRandomUser = (): User => ({
  id: faker.datatype.uuid(),
  content: faker.internet.userName(),
  age: faker.date.birthdate({ mode: 'age' }).getDate(),
});

const userList: Array<User> = Array.from({ length: 30 }).map(() => createRandomUser());

export default userList;
