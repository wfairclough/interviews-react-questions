import * as React from 'react';
import './style.css';

interface Property {
  name: string;
  type: string;
  city: string;
}

const properties: Property[] = [
  {
    name: 'SuiteSpot 1',
    type: 'residential',
    city: 'Toronto',
  },
  {
    name: 'SuiteSpot 2',
    type: 'residential',
    city: 'Vancouver',
  },
  {
    name: 'commercial_suitespot',
    type: 'commercial',
    city: 'Calgary',
  },
];

const residentialProperties = properties;

const suitespotProperties = properties;

export default function App() {
  return (
    <main>
      <h1>Questions</h1>
      <ul>
        <li>Find all the residental properties?</li>
        <li>
          Find all properties with 'SuiteSpot' in the name (case insensitive)?
        </li>
      </ul>

      <h2>Residential Properties</h2>
      <pre>{JSON.stringify(residentialProperties, null, 2)}</pre>

      <h2>SuiteSpot Properties</h2>
      <pre>{JSON.stringify(suitespotProperties, null, 2)}</pre>
    </main>
  );
}
