


export async function getStaticProps() {
  const res = await fetch('https://api.punkapi.com/v2/beers')
  const beers = await res.json()
  return ({
    props: {
      beers,
    },
  })
}
export { default } from './Beers';