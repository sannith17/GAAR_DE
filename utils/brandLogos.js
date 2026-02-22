// Brand logo mapping for car manufacturers
export const brandLogos = {
  'Audi': 'https://1000logos.net/wp-content/uploads/2018/05/Audi-logo.png',
  'BMW': 'https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo.png',
  'Mercedes': 'https://i.pinimg.com/originals/7a/7c/32/7a7c32a32c0d68f63168dcfa2e45ad60.png',
  'Porsche': 'https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png',
  'Volvo': 'https://logos-world.net/wp-content/uploads/2020/04/Volvo-Logo-1971-present.png'
}

// Fallback color for brands without logos
export const getBrandLogo = (brand) => {
  return brandLogos[brand] || null
}
