function makeTriagle(num) {
    totalWhiteSpace = '';
    for (let i = num; i > 0; i--) {
        row = '';
        for (let j = 0; j < i; j++) {
            row += '* ';
        }
        totalWhiteSpace += ' '
        totalLine = totalWhiteSpace + row;
        console.log(totalLine);
    }
}

makeTriagle(5);