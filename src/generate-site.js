const { fips } = require('crypto');
const fs = require('fs');

const writeFile = pageHTML => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageHTML,  err => {
            // if there's an error, reject and send error to .catch
            if(err){
                reject(err);
                return;
            }
            // otherwise, resolve and send data to .then
            resolve ({
                ok: true,
                message: 'Team Profile HTML file has been created and is available in the "dist" folder.'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err){
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Style sheet copied!'
            });
        });
    });
}

module.exports = {writeFile, copyFile};