import { fakerEN_CA, fakerUK, fakerDE } from '@faker-js/faker';
import introduceErrors from './errorHandlers';

export default function generateFakeUsers(count, seed, region, errorAmount) {
    let fakerRegion = fakerUK;
    if (region === "Germany") {
        fakerRegion = fakerDE;
    }
    else if (region === "Canada") {
        fakerRegion = fakerEN_CA;
    }
    else {
        fakerRegion = fakerUK;
    }
    let fakeUsers = [];
    fakerRegion.seed(seed);
    for (let i = 0; i < count; i++) {
        let sex = '';
        let a = i + 10;
        if(a % 2 === 0) {
            sex = 'male';
        }
        else {
            sex = 'female';
        }
        const originalFirstName = fakerRegion.person.firstName(sex);
        const originalLastName = fakerRegion.person.lastName(sex);
        const originalMiddleName = fakerRegion.person.middleName(sex);
        const originalCity = fakerRegion.location.city();
        const originalStreet = fakerRegion.location.street();
        const originalPhone = fakerRegion.phone.number()
        const fakeUser = {
            index: i + 1,
            id: fakerRegion.string.uuid(),
            fName: introduceErrors(originalFirstName, errorAmount),
            lName: introduceErrors(originalLastName, errorAmount),
            mName: introduceErrors(originalMiddleName, errorAmount),
            country: region,
            city: introduceErrors(originalCity, errorAmount),
            street: introduceErrors(originalStreet, errorAmount),
            building: fakerRegion.location.buildingNumber(),
            phone: introduceErrors(originalPhone, errorAmount)
        };  
        fakeUsers.push(fakeUser);
    }
    return fakeUsers;
}