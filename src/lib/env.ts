// eslint-disable-next-line node/no-process-env
const isProd = process.env.NODE_ENV === "production"

function getEnv() {
  if (isProd) {
    return {
      APP_URL: "https://voicegen-nu.vercel.app",
    }
  }
  return {
    APP_URL: "http://localhost:3000",
  }
}

export const env = getEnv()
