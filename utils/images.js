export const getProductImage = (tyreBrand) => {
  const brand = tyreBrand.toLowerCase()
  
  const imageMap = {
    'michelin': 'https://www.michelin.de/static/images/products/primacy-4.png',
    'pirelli': 'https://www.pirelli.com/static/images/products/car/gallery/pzero/pzero-4.webp',
    'continental': 'https://www.continental.com/static/images/products/premiumcontact-6.png',
    'goodyear': 'https://www.goodyear.com/static/images/products/eagle-f1.png',
    'bridgestone': 'https://www.bridgestone.com/static/images/products/turanza.png',
    'hankook': 'https://www.hankooktire.com/content/dam/hankooktire/local/img/product/ventus-s1-evo3-k127.png'
  }

  for (const [key, url] of Object.entries(imageMap)) {
    if (brand.includes(key)) {
      return url
    }
  }
  
  return 'https://via.placeholder.com/400x300?text=Reifen'
}
