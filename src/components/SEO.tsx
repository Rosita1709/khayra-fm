import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  lang?: string
  image?: string
  url?: string
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  lang = 'fr',
  image = 'https://khayrafm.com/logo-kfm.png',
  url = 'https://khayrafm.com'
}: SEOProps) {
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title} | KFM</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="KFM" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={`${title} | KFM`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="fr_SN" />
      <meta property="og:site_name" content="KFM" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | KFM`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}