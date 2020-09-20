import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPlantsWithSlug, getPlantAndMorePlants } from '../../lib/api'
import PostTitle from '../../components/post-title'
import { CMS_NAME } from '../../lib/constants'

export default function Post({ plant, morePlants, preview }) {
  const router = useRouter()
  if (!router.isFallback && !plant?._meta?.uid) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title[0].text} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.coverimage.url} />
              </Head>
              <PostHeader
                title={plant.title}
                coverImage={plant.coverimage}
                date={plant.date}
                author={plant.author}
              />
              <PostBody content={plant.content} />
            </article>
            <SectionSeparator />
            {morePlants && morePlants.length > 0 && (
              <MoreStories plants={morePlants} />
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPlantAndMorePlants(params.slug, previewData)

  return {
    props: {
      preview,
      plant: data?.plant ?? null,
      morePlants: data?.morePlants ?? [],
    },
  }
}

export async function getStaticPaths() {
  const allPlants = await getAllPlantsWithSlug()
  return {
    paths: allPlants?.map(({ node }) => `/plants/${node._meta.uid}`) || [],
    fallback: true,
  }
}
