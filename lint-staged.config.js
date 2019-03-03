module.exports = {
    '*.{json,md}': ['yarn format --write', 'git add'],
    '*.css': ['yarn format --write', 'git add', 'yarn style:lint'],
    '*.js': [
        'yarn format --write',
        'yarn js:lint --fix',
        'git add',
        'yarn test --findRelatedTests',
    ],
};
