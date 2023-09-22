interface Props {
  url: string
  dataCache?: RequestCache
}

const API_KEY = process.env.API_KEY_NASA

export const getData = async ({ url, dataCache = 'force-cache' }: Props): Promise<any> => {
  return await fetch(`${url}api_key=${API_KEY}`, { cache: dataCache })
    .then(async (response) => await response.json())
}
