## Structure
```
├── .storybook
├── public
├── src
│   ├── assets
│   │   ├── img
│   │   └──svg
│   ├── components
│   │   ├── atoms
│   │   │   ├── Button
│   │   │   ├── Checkbox
│   │   │   ├── Input
│   │   │   └── Text
│   │   ├── documentation
│   │   ├── molecules
│   │   │   ├── Card
│   │   │   └── Header
│   │   ├── organisms
│   │   │   └── PageStatic
│   │   └── templates
│   └── util
```

This is the project's structure, here you can see the most important directories like:  
* Atoms: in this section you can find isolate elements, like tags(buttons, inputs and checkbox);  
* Molecules: in this section you will find the combination of elements inside of another element, like( cards and headers);  
* Organisms: this section contain the combination of all previously elements.
	
## Technologies
Project is created with:
* [React](https://pt-br.reactjs.org/) version: 16.13
* [ReactDOM](https://pt-br.reactjs.org/docs/react-dom.html) version: 16.13
* [Tailwind CSS](https://tailwindcss.com/) version: 1.7
* [Storybook](https://storybook.js.org/) version: 6.0
* [Babel](https://babeljs.io/) version: 8.1
* [TypeScript](https://www.typescriptlang.org/) version: 3.7
	
## Setup
To run this project, install it locally using YARN:

```
$ yarn install or yarn
$ yarn storybook
```

or NPM:

```
$ npm install or npm i
$ npm run storybook
```