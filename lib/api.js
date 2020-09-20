import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_API_TOKEN
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

async function fetchAPI(query, { previewData, variables } = {}) {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  )

  if (res.status !== 200) {
    console.log(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllPlantsWithSlug() {
  const data = await fetchAPI(`
    {
      allPlants {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `)
  return data?.allPlants?.edges
}

export async function getAllPlantsForHome(previewData) {
  const data = await fetchAPI(
    `
    query {
        allPlants(sortBy: date_DESC) {
        edges {
          node {
            date
            title
            content
            coverimage
            excerpt
            author {
              ...on Author {
                name
                picture
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  `,
    { previewData }
  )

  return data?.allPlants?.edges
}

export async function getPlantAndMorePlants(slug, previewData) {
  const data = await fetchAPI(
    `
  query PlantBySlug($slug: String!, $lang: String!) {
    plant(uid: $slug, lang: $lang) {
      title
      content
      date
      coverimage
      authors {
        ...on Author {
          name
          picture
        }
      }
      _meta {
        uid
      }
    }
   morePlants: allPlants(sortBy: date_DESC, first: 3) {
      edges {
        node {
          title
          content
          date
          coverimage
          excerpt
          author {
            ...on Author {
              name
              picture
            }
          }
          _meta {
            uid
          }
        }
      }
    }
  }
  `,
    {
      previewData,
      variables: {
        slug,
        lang: API_LOCALE,
      },
    }
  )

  data.morePlants = data.morePlants.edges
    .filter(({ node }) => node._meta.uid !== slug)
    .slice(0, 2)

  return data
}