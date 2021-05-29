# Project setup

https://www.youtube.com/watch?v=j0FiMekdeOs

## Lerna

```bash
npm init -y
npm -v
npm i -D lerna
npx lerna init
```

- Edit version in lerna.json
- move project to packages

```bash
# Removing node_modules from packages
npx lerna clean -y

# Installing packages dependencies to root node_modules
npx lerna bootstrap --hoist
```

- Create scripts in package.json

```bash
# Execute only package. used Project name from pachage.json
--scope=crash-course
```
