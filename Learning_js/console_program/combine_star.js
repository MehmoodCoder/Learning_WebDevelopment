for (let i = 1; i <= 6; i++) {
     for (let j = 1; j <= i; j++)
          process.stdout.write("*");
     process.stdout.write("\n");
}
for (let i = 5; i >= 1; i--) {
     for (let j = 1; j <= i; j++) {
          process.stdout.write("*");
     }
     process.stdout.write("\n");
}
