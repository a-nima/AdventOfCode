export function bags(input) {
    const targetColor = 'shiny gold';
    let containingBagsRules = [];
    let bags = [];

    let rules = input.split(/\n/);

    for (const bagRules of rules) {
        let pattern = /((\d+)?\s?(\w+\s\w+))\sbags?/g;
        let matchGroup = pattern.exec(bagRules);
        let parentBag = matchGroup[3];
        containingBagsRules[parentBag] = [];
        while (matchGroup = pattern.exec(bagRules)) {
            if (matchGroup[3] != 'no other') {
                let count = Number(matchGroup[2]);
                containingBagsRules[parentBag].push(matchGroup[3])
            }
        }
    }

    console.log(containingBagsRules);

    const findContainingBags = (currentTargetColor) => {
        for (const key of Object.keys(containingBagsRules)) {
            if (containingBagsRules[key].indexOf(currentTargetColor) > -1 && bags.indexOf(key) == -1) {
                bags.push(key);
                findContainingBags(key);
            }
        }
    }
    findContainingBags(targetColor);
    console.log(bags.length);

    const countBagsInShinyGoldBag = (currentTargetColor) => {
        
    }

}