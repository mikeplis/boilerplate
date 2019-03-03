module.exports = {
    '*.{json,css,md}': ['yarn format --write', 'git add'],
    '*.js': [
        'yarn format --write',
        'yarn lint --fix',
        'git add',
        'yarn test --findRelatedTests',
    ],
};
