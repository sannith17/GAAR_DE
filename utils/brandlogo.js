// Brand logo mapping for car manufacturers
export const brandLogos = {
  'Audi': 'https://1000logos.net/wp-content/uploads/2018/05/Audi-logo.png',
  'BMW': 'https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo.png',
  'Mercedes': 'https://1000logos.net/wp-content/uploads/2018/02/Mercedes-Benz-Logo.png',
  'Porsche': 'https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png',
  'Volvo': 'https://1000logos.net/wp-content/uploads/2018/02/Volvo-Logo.png'
}

// Fallback color for brands without logos
export const getBrandLogo = (brand) => {
  return brandLogos[brand] || null
}
