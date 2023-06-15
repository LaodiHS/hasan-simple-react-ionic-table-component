# React Table Component

This is a reusable React table component that is mobile-compliant and built with Ionic components.

## Installation

To use this component in your project, follow these steps:

1. Install the package from npm:

```bash
   npm install --save hasan-simple-react-ionic-table-component 
```

2. Import

```jsx
import { Table } from 'my-react-table-component';
```

3. Create

```ts
const data = [
  { title: 'Title 1', description: 'Description 1', handleClick: () => {} },
  { title: 'Title 2', description: 'Description 2', handleClick: () => {} },
  // Add more data rows...
];

const MyComponent = () => {
  return <Table data={data} />;
};

```
