# LiveDoc

Real time collaborative document editor.

![image](https://github.com/user-attachments/assets/31fc561d-bcf6-491d-81f2-e64931e807a4)
![image](https://github.com/user-attachments/assets/325a1b81-081f-4a20-94a0-8b7d92d23fba)


## Stacks

- Next 14
- Clerk
- Tailwindcss
- Liveblock

Instal dependencies and execute: <br />
```
npm install
npm run dev
```

Create a .env.local file in the root then paste the following variables replacing with your Clerk keys <br />
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY={YOUR_KEY_HERE}
CLERK_SECRET_KEY={YOUR_KEY_HERE}

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

LIVEBLOCKS_SECRET_KEY={YOUR_KEY_HERE}

SENTRY_AUTH_TOKEN={YOUR_KEY_HERE}

```
