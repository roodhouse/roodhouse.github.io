# 📐 Add Comments to Implementation of `fs.appendFile()`

Work with a partner to add comments describing the functionality of the code found in [index.js](./Unsolved/index.js).

## 📝 Notes

Refer to the documentation: 

[Node.js documentation on the fs module](https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback)

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is a ternary operator?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

---


const fs = require('fs');

fs.readFile('data.csv', 'utf8', (error, data) =>)
    error ? console.error(error) : console.log(data)

fs.writeFile('log.txt', process.argv[2], (err) => 
err ? console.log(err) : console.log('success!')
);