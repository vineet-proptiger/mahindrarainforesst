
import './new-theme.css'
import { CITY_DISPLAY } from '../../lib/config'
import Script from 'next/script'

export const metadata = {
  title: 'Mahindra Rainforest | Premium 2 & 3 BHK Apartments in Kanjurmarg, Mumbai',
  description: "Mahindra Rainforest is a premium residential development by Mahindra Lifespaces, offering luxurious 2 & 3 BHK apartments starting ₹2.10 Cr* at Kanjurmarg, Mumbai. Spread across 37 acres.",
}

export default function NewLaunchLayout({ children }) {
  return (
    <>
      <Script
        id="json-ld-article-new-launch"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://mahindrarainforestkanjurmarg.in/"
            },
            "headline": "Mahindra Rainforest | Premium 2 & 3 BHK Apartments in Kanjurmarg, Mumbai",
            "description": "Mahindra Rainforest is a premium residential development by Mahindra Lifespaces, offering luxurious 2 & 3 BHK apartments starting ₹2.10 Cr* at Kanjurmarg, Mumbai. Spread across 37 acres.",
            "image": "https://mahindrarainforestkanjurmarg.in/_next/image?url=%2Fnew-launch%2Fimages%2Fhero%2Fbanner1.webp&w=1200&q=75",
            "author": {
              "@type": "Organization",
              "name": "Proptiger Marketing Services Pvt Ltd",
              "url": "https://www.proptiger.com/mumbai/kanjurmarg/mahindra-rainforest"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Proptiger",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.proptiger.com/"
              }
            },
            "datePublished": "2026-06-10"
          })
        }}
      />
      {children}
    </>
  )
}

