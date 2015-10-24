// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory
require('dotenv').load();
require('require-dir')('build/tasks');
