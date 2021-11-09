const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const generatePage = () => 'Name; Jane, Github: janehub';

fs.writeFile('index.html', generatePage(name, github), err => {
 if (err) throw err;
 
 console.log('Portfolio complete! Check out index.html to see the output!');
});
