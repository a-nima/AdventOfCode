export function bags(input) {
    const targetColor = 'shiny gold';
    let innerBagsRules = []; 
    let bags = [];
    let innerBagsCount = 0;

    for (const bagRules of input.split(/\n/)) {
        let pattern = /((\d+)?\s?(\w+\s\w+))\sbags?/g;
        let matchGroup = pattern.exec(bagRules);
        let parentBag = matchGroup[3];
        innerBagsRules[parentBag] = [];

        while (matchGroup = pattern.exec(bagRules)) {
            if (matchGroup[3] != 'no other') {
                let count = Number(matchGroup[2]);
                innerBagsRules[parentBag][matchGroup[3]] = count;
            }
        }
    }

    const findContainingBags = (currentTargetColor) => {
        for (const key of Object.keys(innerBagsRules)) {
            if (Object.keys(innerBagsRules[key]).indexOf(currentTargetColor) > -1 && bags.indexOf(key) == -1) {
                bags.push(key);
                findContainingBags(key);
            }
        }
    }

    findContainingBags(targetColor);
    console.log(bags.length);

    const countBagsInShinyGoldBag = (currentTargetColor) => {
        let innerBags = Object.keys(innerBagsRules[currentTargetColor]);
        for (const innerBag of innerBags) {
            const count = innerBagsRules[currentTargetColor][innerBag];
            for (let index = 0; index < count; index++) {
                innerBagsCount++;
                countBagsInShinyGoldBag(innerBag);
            }
        }
    }

    countBagsInShinyGoldBag(targetColor);
    console.log(innerBagsCount);
}