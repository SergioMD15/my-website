import { Layout } from "components/Layout"
import { LottieLoader } from "components/LottieLoader"

const Custom404 = () => {
  return (
    <Layout>
      <div className="flex self-center justify-center">
        <LottieLoader animationName="error" />
      </div>
    </Layout>
  )
}

export default Custom404