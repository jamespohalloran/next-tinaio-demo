
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import client from '../components/client';
import { useForestryForm, useTinaAuthRedirect } from '@forestryio/client'
import { DocumentUnion, Home as HomeResponse } from '../.tina/types'
export default function Home(props) {

  useTinaAuthRedirect();

  const data = props.preview ? useForestryForm<HomeResponse>(props).data : props.document.node.data ;

  const missingEnv = [{key: "NEXT_PUBLIC_REALM_NAME", value: process.env.NEXT_PUBLIC_REALM_NAME },
  {key: "NEXT_PUBLIC_TINA_CLIENT_ID", value: process.env.NEXT_PUBLIC_TINA_CLIENT_ID }].filter(env => !env.value)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next TypeScript App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {data.title}
        </h1>

        <div className={styles.grid}>
        { missingEnv.length ? 
        <p>It looks like your site is missing the following environment variables:
          <div className={styles.card}>{missingEnv.map(env => <><b>{env.key}</b><br/></>)}</div>
        You will need to add these to login and make edits</p> : <>{!props.preview && <p className={styles.description}>
        To make edits to site, sign in{' '}
        <a href={"/login"}>here</a>
      </p> }</>}
      </div>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export const getStaticProps = async (props: {preview: boolean, previewData: { tinaio_token: string}}) => {
  
  const relativePath = `home.md`;
  const section = 'pages';

  const content = await client(props.preview, () => props.previewData?.tinaio_token || "").getContentForSection<DocumentUnion>({
    relativePath,
    section,
  })
  return {
    props: {...content,
    relativePath,
    section,
    preview: !!props.preview
  }}
};
