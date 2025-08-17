n = 5;

//square
for (i = 1; i <= n; i++) {
    line = ' '
    for (j = 1; j <= n; j++) {
        line += " *"
    }
    console.log(line)
}
//right angled-triange

for (i = 1; i <= n; i++) {
    line = ' '
    for (j = 1; j <= i; j++) {
        line += " *"
    }
    console.log(line)
}


//inverted right angled-triange
for (i = n; i >= 1; i--) {
    line = ' '
    for (j = 1; j <= i; j++) {
        line += " *"
    }
    console.log(line)
}

//pyramid

for (i = 1; i<= n; i++) {
    line = ''
    for (j = 1; j <= n - i; j++) {
        line += ' '
    }
    for (k = 1; k <= i; k++) {
        line += ' *'
    }
    console.log(line)
}

//Diamond

for (i = 1; i<= n; i++) {
    line = ''
    for (j = 1; j <= n - i; j++) {
        line += ' '
    }
    for (k = 1; k <= i; k++) {
        line += ' *'
    }
    console.log(line)
}for (i = n-1; i>= 1; i--) {
    line = ''
    for (j = 1; j <= n -i; j++) {
        line += ' '
    }
    for (k = 1; k <= i; k++) {
        line += ' *'
    }
    console.log(line)
}


//Number pyramid
for (i = 1; i<= n; i++) {
    line = ''
    for (j = 1; j <= n - i; j++) {
        line += ' '
    }
    for (k = 1; k <= i; k++) {
        line += i+' '
    }
    console.log(line)
}

// Hourglass

for (i = n; i>= 1; i--) {
    line = ''
    for (j = 1; j <= n -i; j++) {
        line += ' '
    }
    for (k = 1; k <= i; k++) {
        line += ' *'
    }
    console.log(line)
}for (i = 2; i<= n; i++) {
    line = ''
    for (j = 1; j <= n - i; j++) {
        line += ' '
    }
    for (k = 1; k <= i; k++) {
        line += ' *'
    }
    console.log(line)
}



// Hollow Square
function PrintHollowSquare(n) {
    let pattern = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                pattern += "* ";
            } else {
                pattern += "  ";
            }
        }
        pattern += "\n";
    }
    console.log(pattern);
}

// Hourglass
function PrintHourGlass(n) {
    let pattern = "";
    for (let i = 0; i < n; i++) {
        pattern += " ".repeat(i) + "*".repeat(2 * (n - i) - 1) + "\n";
    }
    for (let i = n - 2; i >= 0; i--) {
        pattern += " ".repeat(i) + "*".repeat(2 * (n - i) - 1) + "\n";
    }
    console.log( pattern);
}

// ZigZag
function PrintZigZag(n) {
    let pattern = "";
    for (let row = 1; row <= 3; row++) {
        for (let col = 1; col <= n; col++) {
            if ((row + col) % 4 === 0 || (row === 2 && col % 4 === 0)) {
                pattern += "*";
            } else {
                pattern += " ";
            }
        }
        pattern += "\n";
    }
    console.log( pattern);
}

PrintHollowSquare(5);
PrintHourGlass(5);
PrintZigZag(13);