module.exports = {
    stories: ["../src/**/*.stories.(ts|tsx|js|jsx)"],
    
    addons: [
    
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",     
    "@storybook/addon-knobs",
    "@storybook/addon-info",
    "@storybook/addon-docs",
    "@storybook/addon-storysource",
    "@storybook/addon-jest"
    ]
    };