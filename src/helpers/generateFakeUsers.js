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
    const originalFirstName = fakerRegion.person.firstName(sex);
    const originalLastName = fakerRegion.person.lastName(sex);
    const originalMiddleName = fakerRegion.person.middleName(sex);
    const originalCity = fakerRegion.location.city();
    const originalStreet = fakerRegion.location.street();
    const originalPhone = fakerRegion.phone.number();

    const fakeUser = {
      index: i + 1,
      id: fakerRegion.string.uuid(),
      fName: originalFirstName,
      lName: originalLastName,
      mName: originalMiddleName,
      country: region,
      city: originalCity,
      street: originalStreet,
      building: fakerRegion.location.buildingNumber(),
      phone: originalPhone
    };

    fakeUsers.push(introduceErrors(fakeUser, errorAmount));
  }
  console.log(errorAmount);
  return fakeUsers;
}

export default generateFakeUsers;
