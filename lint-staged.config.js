module.exports = {
    'src/**/*.{json,md,mdx}': ['yarn format --write', 'git add'],
    'src/**/*.css': ['yarn format --write', 'git add', 'yarn lint:style'],
    'src/**/*.js': [
        'yarn format --write',
        'yarn lint:js --fix',
        'git add',
        'yarn test --findRelatedTests',
    ],
};
