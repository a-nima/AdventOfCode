export function passportValidation(input) {
    let passports = input.split('\n\n');
    let validPassports = 0;
    passports.forEach(passport => {
        if (isValid(passport)) {
            validPassports++;
        }
    });
    console.log(validPassports);
}

function isValid(passport) {
    const pattern = /((byr|iyr|eyr):([\d]{4})|(hgt):([\d]+)(in|cm)|(hcl):(#[0-9a-f]{6})|(ecl):(amb|blu|brn|gry|grn|hzl|oth)|(pid):([0-9]{9}))\b/g;
    let propsCount = 0;
    var matchGroup;

    while (matchGroup = pattern.exec(passport)) {
        let filteredMatchGroups = matchGroup.filter(m => m != undefined);
        let isValid = true;
        let key = filteredMatchGroups[2];
        let value = filteredMatchGroups[3];
        let extraValue = filteredMatchGroups[4];
        switch (key) {
            case 'byr':
                isValid = Number(value) >= 1920 && Number(value) <= 2002
                break;
            case 'iyr':
                isValid = Number(value) >= 2010 && Number(value) <= 2020
                break;
            case 'eyr':
                isValid = Number(value) >= 2020 && Number(value) <= 2030
                break;
            case 'hgt':
                if (extraValue == 'in') {
                    isValid = Number(value) >= 59 && Number(value) <= 76
                } else if(extraValue == 'cm') {
                    isValid = Number(value) >= 150 && Number(value) <= 193
                }
                break;
            default:
                break;
        }
        if (isValid) {
            propsCount++;
        }
    }
    return propsCount >= 7;
}