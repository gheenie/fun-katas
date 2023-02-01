const updateRemoteStudents = require('../update-remote-students');

describe('updateRemoteStudents()', () => {
    test('Original input not mutated; memory refs are different', () => {
        const input = [{ name: 'Euler', age: 27 }];

        const output = updateRemoteStudents(input);

        const expected = [{ name: 'Euler', age: 27 }];

        expect(input).toEqual(expected);
        expect(input).not.toBe(output);
        expect(input[0]).not.toBe(output[0]);
    });

    test('one student with no location', () => {
        const input = [{ name: 'Euler', age: 27 }];

        const output = updateRemoteStudents(input);

        const expected = [{ name: 'Euler', age: 27, location: 'remote' }];
        expect(output).toEqual(expected);
    });

    test('one student with no location, some with locations', () => {
        const input = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];

        const output = updateRemoteStudents(input);

        const expected = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
        expect(output).toEqual(expected);
    });
});
