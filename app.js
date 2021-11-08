const profileDataArgs = process.argv.slice(2, process.argv.length);
console.loge(profileDataArgs);

const printProfileData = (profileDataArr) => {
 console.log(profileDataArr);
};

printProfileData(profileDataArgs);
