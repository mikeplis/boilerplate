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
            // {
            //     type: 'add',
            //     path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.js',
            //     templateFile: './plop-templates/component/Component.js.hbs',
            // },
            // {
            //     type: 'add',
            //     path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.module.css',
            //     templateFile: './plop-templates/component/Component.module.css.hbs',
            // },
            // {
            //     type: 'add',
            //     path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.test.js',
            //     templateFile: './plop-templates/component/Component.test.js.hbs',
            // },
            // {
            //     type: 'add',
            //     path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.js',
            //     templateFile: './plop-templates/component/Component.js.hbs',
            // },
            {
                type: 'addMany',
                destination: './src/components/{{pascalCase componentName}}',
                base: './plop-templates/component',
                templateFiles: './plop-templates/component/**',
            },
        ],
    });
};
