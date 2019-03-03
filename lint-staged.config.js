module.exports = {
    '*.{js,json,css,md}': [
        'yarn format --write',
        'yarn lint --fix',
        'git add',
        'yarn test --findRelatedTests',
    ],
};
