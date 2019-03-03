module.exports = {
    setupFilesAfterEnv: [
        './testSetup.js',
        'react-testing-library/cleanup-after-each',
    ],
    moduleNameMapper: {
        '\\.module.css$': 'identity-obj-proxy',
    },
};
