module.exports = plop => {
    plop.setGenerator('component', {
        description: 'component',
        prompts: [
            {
                type: 'input',
                name: 'componentName',
                message: 'component name',
            },
        ],
        actions: [
            {
                type: 'addMany',
                destination: './src/components/{{pascalCase componentName}}',
                base: './plop-templates/component',
                templateFiles: './plop-templates/component/**',
            },
        ],
    });
};
