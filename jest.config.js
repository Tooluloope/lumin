module.exports = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	// transform: {
	// 	'^.+\\.tsx?$': 'ts-jest',
	// },
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
};
