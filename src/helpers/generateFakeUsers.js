import { fakerEN_CA, fakerUK, fakerDE } from '@faker-js/faker';
import introduceErrors from './errorHandlers';

function generateFakeUsers(count, seed, region, errorAmount) {
  let fakerRegion = fakerUK;
  if (region === "Germany") {
    fakerRegion = fakerDE;
  } else if (region === "Canada") {
    fakerRegion = fakerEN_CA;
  } else {
    fakerRegion = fakerUK;
  }

  let fakeUsers = [];
  fakerRegion.seed(seed);

  for (let i = 0; i < count; i++) {
    let sex = (i + 10) % 2 === 0 ? 'male' : 'female';
    const originalId = fakerRegion.string.uuid();
    const originalFirstName = fakerRegion.person.firstName(sex);
    const originalLastName = fakerRegion.person.lastName(sex);
    const originalMiddleName = fakerRegion.person.middleName(sex);
    const originalCity = fakerRegion.location.city();
    const originalStreet = fakerRegion.location.street();
    const originalPhone = fakerRegion.phone.number();
    const originalBuilding = fakerRegion.location.buildingNumber();

    const fakeUser = {
      index: i + 1,
      id: originalId,
      fName: originalFirstName,
      lName: originalLastName,
      mName: originalMiddleName,
      city: originalCity,
      street: originalStreet,
      building: originalBuilding,
      phone: originalPhone
    };

    fakeUsers.push(introduceErrors(fakeUser, errorAmount));
  }
  return fakeUsers;
}

export default generateFakeUsers;
