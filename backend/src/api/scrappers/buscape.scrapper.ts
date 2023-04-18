import { getHtml, cheerioInstance } from '../utils/scrapper.functions';
import IScrap from '../interface/IScrap';

export const buscapeScrapper = async (query: string) => {
  const url = `https://www.buscape.com.br/search?q=${query.split(' ').join('%20')}`;
  const html = await getHtml(url);
  const extract = await cheerioInstance(html);

  const webScrap: IScrap[] = [];

  const wrapper = '.SearchCard_ProductCard_Inner__7JhKb';

  extract(wrapper).each((_, element) => {
    const titleElement = extract(element).find('.Text_DesktopLabelSAtLarge__baj_g');
    const priceElement = extract(element).find('.Text_MobileHeadingS__Zxam2');
    const title = extract(titleElement).text();
    const price = extract(priceElement).text();
    const linkVariable = extract(element).attr('href');
    const link = `https://www.buscape.com.br${linkVariable}`;
    let image: string | undefined = '';
    if (extract(element).find('[data-testid="product-card::image"]').attr('src')?.split(':')[0] === 'data') {
      image = extract('[data-testid="product-card::image"]').find('img').attr('data-src');
    } else {
      image = extract('[data-testid="product-card::image"]').find('img').attr('src');
    }
    webScrap.push({ title, price, link, image });
  })

  return webScrap;
}