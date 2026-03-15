```
npm init -y
bun add express
bun add -D typescript tsx @types/node @types/express
npx tsc --init
```

```js
{
"compilerOptions": {
  "target": "ES2020",
  "module": "CommonJS",
  "rootDir": "./src",
  "outDir": "./dist",
  "strict": true,
  "esModuleInterop": true,
  "skipLibCheck": true
},
"include": ["src"]
}
```

```
mkdir src
touch src/server.ts
```

```
"scripts": {
  "dev": "tsx watch src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

```
bun run dev
```

```
bun run build
bun start
```
