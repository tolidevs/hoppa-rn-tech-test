module.exports = {
    preset: "react-native",
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
    clearMocks: true,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
}