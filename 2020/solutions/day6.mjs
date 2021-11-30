export function customCustoms(input) {
    let groups = input.split(/\n\n/);
    let totalYAnswers = 0;
    let totalCommonAnswers = 0;

    for (const group of groups) {
        let groupAnswers = new Set();
        let peopleAnswers = [];
        let people = group.split(/\n/);

        for (const person of people) {
            let answers = person.split('');
            peopleAnswers.push(answers);
            answers.forEach(a => groupAnswers.add(a));
        }

        totalYAnswers += groupAnswers.size;
        totalCommonAnswers += peopleAnswers.reduce((arr1, arr2) => {
            let common = [];
            arr1.forEach(a => {
                if(arr2.indexOf(a) > -1) {
                    common.push(a);
                }
            })
            return common;
        }).length;
    }

    console.log(totalCommonAnswers);
    console.log(totalYAnswers);
}