import { writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = join(__dirname, '..', 'public');
const ORIGIN = 'https://grupobcenergia.com.br';

const assets = [
  // Logo
  ['/Logo-BC-Energia-Vertical-Branco.svg', '/Logo-BC-Energia-Vertical-Branco.svg'],
  // Favicon
  ['/favicon.ico', '/favicon.ico'],
  // Hero backgrounds
  ['/bg-home.jpg', '/bg-home.jpg'],
  ['/img/pages/banner2.webp', '/img/pages/banner2.webp'],
  ['/img/pages/nossas-usinas2.webp', '/img/pages/nossas-usinas2.webp'],
  // Global assets
  ['/img/global/section-arrow-down-white.svg', '/img/global/section-arrow-down-white.svg'],
  ['/img/global/section-arrow-down-inverted-white.svg', '/img/global/section-arrow-down-inverted-white.svg'],
  ['/img/global/grupo-bc-logo-solo-branca.svg', '/img/global/grupo-bc-logo-solo-branca.svg'],
  ['/img/global/testimony-icon.svg', '/img/global/testimony-icon.svg'],
  ['/img/global/footer-bg.png', '/img/global/footer-bg.png'],
  // Nav icons
  ['/img/icons/icon-menu.svg', '/img/icons/icon-menu.svg'],
  // Product icons
  ['/img/icons/icon-mercado-energia.svg', '/img/icons/icon-mercado-energia.svg'],
  ['/img/icons/icon-energia-assinatura.svg', '/img/icons/icon-energia-assinatura.svg'],
  ['/img/icons/icon-gestao-de-energia.svg', '/img/icons/icon-gestao-de-energia.svg'],
  ['/img/icons/irec.svg', '/img/icons/irec.svg'],
  ['/img/icons/icon-arrendamento-de-usinas.svg', '/img/icons/icon-arrendamento-de-usinas.svg'],
  ['/img/icons/icon-consultoria-juridica.svg', '/img/icons/icon-consultoria-juridica.svg'],
  // Social icons
  ['/img/icons/instagram.svg', '/img/icons/instagram.svg'],
  ['/img/icons/facebook.svg', '/img/icons/facebook.svg'],
  ['/img/icons/linkedin.svg', '/img/icons/linkedin.svg'],
  ['/img/icons/youtube.svg', '/img/icons/youtube.svg'],
  // Product card thumbnails
  ['/img/components/products-card/mercado-livre-de-energia-thumb.png', '/img/components/products-card/mercado-livre-de-energia-thumb.png'],
  ['/img/components/products-card/energia-por-assinatura-thumb.png', '/img/components/products-card/energia-por-assinatura-thumb.png'],
  ['/img/components/products-card/gestao-de-energia-thumb.png', '/img/components/products-card/gestao-de-energia-thumb.png'],
  ['/img/components/products-card/certificacao-renovavel-thumb.png', '/img/components/products-card/certificacao-renovavel-thumb.png'],
  ['/img/components/products-card/arrendamento-de-usinas-thumb.png', '/img/components/products-card/arrendamento-de-usinas-thumb.png'],
  ['/img/components/products-card/consultoria-juridica-thumb.png', '/img/components/products-card/consultoria-juridica-thumb.png'],
  // Numbers section
  ['/img/components/numbers/fundo-numeros.jpg', '/img/components/numbers/fundo-numeros.jpg'],
  // Customer logos
  ['/img/components/customers/novomundo.png', '/img/components/customers/novomundo.png'],
  ['/img/components/customers/triunfoconcebra.png', '/img/components/customers/triunfoconcebra.png'],
  ['/img/components/customers/grupocereal.png', '/img/components/customers/grupocereal.png'],
  ['/img/components/customers/igreja-luz.png', '/img/components/customers/igreja-luz.png'],
  ['/img/components/customers/lifebox.png', '/img/components/customers/lifebox.png'],
  ['/img/components/customers/limagrain-vector-logo.png', '/img/components/customers/limagrain-vector-logo.png'],
  ['/img/components/customers/luidoices.png', '/img/components/customers/luidoices.png'],
  ['/img/components/customers/mega-moda-park.png', '/img/components/customers/mega-moda-park.png'],
  ['/img/components/customers/piquiras.png', '/img/components/customers/piquiras.png'],
  ['/img/components/customers/richesse.png', '/img/components/customers/richesse.png'],
  ['/img/components/customers/teashop.png', '/img/components/customers/teashop.png'],
  ['/img/components/customers/teuto.png', '/img/components/customers/teuto.png'],
  ['/img/components/customers/bandnewsfmgoiania.png', '/img/components/customers/bandnewsfmgoiania.png'],
  ['/img/components/customers/coco-bambu-restaurante.png', '/img/components/customers/coco-bambu-restaurante.png'],
  ['/img/components/customers/coming.png', '/img/components/customers/coming.png'],
  ['/img/components/customers/curtidoratocantins.png', '/img/components/customers/curtidoratocantins.png'],
  ['/img/components/customers/drogariasantamarta.png', '/img/components/customers/drogariasantamarta.png'],
  ['/img/components/customers/flamboyant.png', '/img/components/customers/flamboyant.png'],
  ['/img/components/customers/fujioka.png', '/img/components/customers/fujioka.png'],
  ['/img/components/customers/grupo-jorlan.png', '/img/components/customers/grupo-jorlan.png'],
  ['/img/components/customers/grupo-natureza-o-boticario.png', '/img/components/customers/grupo-natureza-o-boticario.png'],
];

async function downloadFile(url, destPath) {
  const fullDest = join(BASE, destPath);
  await mkdir(dirname(fullDest), { recursive: true });
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    const buf = await res.arrayBuffer();
    await writeFile(fullDest, Buffer.from(buf));
    console.log(`✓ ${destPath}`);
  } catch (e) {
    console.error(`✗ ${destPath}: ${e.message}`);
  }
}

// Download in batches of 4
const BATCH = 4;
for (let i = 0; i < assets.length; i += BATCH) {
  const batch = assets.slice(i, i + BATCH);
  await Promise.all(batch.map(([src, dest]) => downloadFile(ORIGIN + src, dest)));
}
console.log('Done!');
