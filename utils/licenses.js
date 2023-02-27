const licenses = [
    {
        name: "Apache License 2.0",
        short_code: "Apache_2.0",
        url: "https://choosealicense.com/licenses/apache-2.0/",
        color: "green",
    },
    {
        name: "Boost Software License 1.0", 
        short_code: "BSL_1.0",
        url: "https://choosealicense.com/licenses/bsl-1.0/",
        color: "blue",
    },
    {
        name: "GNU AGPLv3",
        short_code: "AGPL_3.0",
        url: "https://choosealicense.com/licenses/agpl-3.0/",
        color: "orange",
    },
    {
        name: "GNU GPLv3", 
        short_code: "GPL_3.0",
        url: "https://choosealicense.com/licenses/gpl-3.0/",
        color: "orange",
    },
    {
        name: "GNU LGPLv3", 
        short_code: "LGPL_3.0",
        url: "https://choosealicense.com/licenses/lgpl-3.0/",
        color: "orange",
    },
    {
        name: "Mozilla Public License 2.0", 
        short_code: "MPL_2.0",
        url: "https://choosealicense.com/licenses/mpl-2.0/",
        color: "orange"
    },
    {
        name: "MIT License", 
        short_code: "MIT",
        url: "https://choosealicense.com/licenses/mit/",
        color: "green",
    },
    {
        name: "The Unlicense",
        short_code: "UNLICENSE",
        url: "https://choosealicense.com/licenses/unlicense/",
        color: "grey",
    },
    {
        name: "Other", 
    },
    {
        name: "None",
    },
];

function licenseNames() {
    const names = [];
    licenses.forEach(item => names.push(item.name));
    return names;
}

function getLicense(licenseName) {
    if (licenseName === "None") {
        return {};
    } else {
        let license;
        licenses.forEach(item => {
            if (item.name === licenseName) license = item;
        });
        if (!license) { 
            license = { name: licenseName, short_code: licenseName, url: "LICENSE", color: "red" };
        }
        license.mdBadge = `[![License Badge](https://img.shields.io/badge/License-${license.short_code}-${license.color}.svg)](${license.url})`;
        license.mdLink = `This project is licensed under ${license.name.toLowerCase().substring(0,3) !== "the" ? "the" : ""} [(${license.name})](${license.url})\n\nRefer to the [license](LICENSE) in the repo`;
        return license;
    }
}

export {licenseNames, getLicense};