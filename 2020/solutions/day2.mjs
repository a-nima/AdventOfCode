// input example: '3-4 t: dttt, 5-7 l: llmlqmblllh'

export function passwordChallenge(input) {
    var inputparts = input.split(/\n/);
    
    let rightPasswords = 0;
    for (let i = 0; i < inputParts.length; i++) {
        let matches = inputParts[i].match(/([\d]+)-([\d]+) ([a-zA-Z]+): (.+)/);
        let min = Number(matches[1]);
        let max = Number(matches[2]);
        let symbol = matches[3];
        let password = matches[4];
        password = password.split('');

        if (password[min - 1] == symbol && password[max - 1] == symbol) {
            continue;
        } else if (password[min - 1] == symbol || password[max - 1] == symbol) {
            rightPasswords++;
        }
    }

    console.log(rightPasswords);
}
