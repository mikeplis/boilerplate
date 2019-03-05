module.exports = {
    'src/**/*.{json,md,mdx}': ['yarn format --write', 'git add'],
    'src/**/*.css': ['yarn format --write', 'git add', 'yarn style:lint'],
    'src/**/*.js': [
        'yarn format --write',
        'yarn js:lint --fix',
        'git add',
        'yarn test --findRelatedTests',
    ],
};
