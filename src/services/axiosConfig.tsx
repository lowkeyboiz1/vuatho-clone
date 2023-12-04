import axios, { AxiosResponse } from 'axios'

const apiConfig = {
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
}

const instance = axios.create({
  baseURL: apiConfig.baseUrl,
  timeout: 30000, // 30 seconds
})

const urlExceptAuthorization = ['Authenticate']

const authorization = async () => {
  const token = localStorage.getItem('access_token')
  console.log(token)

  if (token) {
    return { Authorization: 'Bearer ' + token }
  } else {
    return {}
  }
}

const getUrl = (config: any) => {
  if (config?.baseURL) {
    return config?.url.replace(config?.baseURL, '')
  }
  return config?.url
}

// Intercept all request
instance.interceptors.request.use(
  async (config: any) => {
    const url = getUrl(config)

    if (!urlExceptAuthorization.includes(url)) {
      const authHeader = await authorization()

      config.headers = {
        ...config.headers,
        ...authHeader,
      } as any
    }
    if (process.env.NODE_ENV !== 'production') {
      console.log(
        `%c Request: ${config?.method?.toUpperCase()} - ${getUrl(config)}:`,
        'color: #0086b3; font-weight: bold',
        config,
      )
    }
    return config
  },
  (error: any) => Promise.reject(error),
)

// Intercept all responses
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(
        `%c Response: ${response?.status} - ${getUrl(response?.config)}:`,
        'color: #008000; font-weight: bold',
        response,
      )
    }

    return response.data
  },
  (error: any) => {
    if (process.env.NODE_ENV !== 'production') {
      if (error?.response) {
        console.log(error)

        console.log('====== Server Error =====')
      } else if (error?.request) {
        console.log('====== Timeout =====')
      } else {
        console.log('====== Internal Server Error! =====')
      }
    }

    return Promise.reject(error)
  },
)

export default instance
