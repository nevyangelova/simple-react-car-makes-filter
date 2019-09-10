## React simple filtering tool


1. Run **npm install** to update dependencies
2. Run **node apiserver/server.js** to start the API server
3. Run **npm start** to start application in development mode
4. *Note: test coverage is currently not implemented*
5. In order to display the vehicle cards all filters need to be selected

---

## Issues while implementing

1. Not being sure about the responsibility of each container, which caused refactoring and change of state handling.
2. Having started the application as a whole, without breaking it down into simple features.
3. Couldn't figure out the issues with the test setup (after some investigation found out it might be a compiler issue and having a custom one locally might work).
4. 'Copy/paste' errors.
5. Third-party components used include small UI enhancement components from npm like 'react-scroll', 'rc-slider', 'react-notifications' and 'react-tooltip' which I like using in my applications to enhance the user experience and where custom implementation isn't needed.
---
