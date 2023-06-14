# Todo App with Recoil

Todo app for describing how to use Recoil

## How to use Recoil

- Key Objects
  - `atom`
  - `selector`
- Hooks to get and set atom
  - `useRecoilState`
    - `useState` と同じシグネチャーのAPI
    - `[value setValue] = useRecoilState($key)`
  - `useRecoilValue`
    - value だけを取得するためのAPI
    - `value = useRecoilValue($key)`
  - `useSetRecoilState`
    - 更新関数だけを取得するためのAPI
    - 対象の atom が更新されてもコンポーネントの再レンダリングが走らないというメリットがある
    - `setValue = useSetRecoilState($key)`


Ref:

- [Recoil Document](https://recoiljs.org/docs/introduction/getting-started/)
- [ステート管理を超えるRecoil運用の考え方](https://speakerdeck.com/uhyo/sutetoguan-li-wochao-erurecoilyun-yong-nokao-efang)
- [Recoil ドキュメント入門](https://future-architect.github.io/articles/20230215a/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
