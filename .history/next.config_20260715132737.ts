/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ⚠️ ສຳຄັນຫຼາຍ: ຖ້າບໍ່ໃສ່ໂຕນີ້ <Image /> ຂອງ Next.js ຈະບໍ່ສະແດງຮູບໃນ GitHub Pages
  },
  // ເພີ່ມ 2 ແຖວນີ້ເຂົ້າໄປ (ປ່ຽນ phailin-portfolio ໃຫ້ກົງກັບຊື່ Repo ຂອງເຈົ້າ)
  basePath: isProd ? '/phailin-portfolio' : '',
  assetPrefix: isProd ? '/phailin-portfolio/' : '',
};

module.exports = nextConfig;