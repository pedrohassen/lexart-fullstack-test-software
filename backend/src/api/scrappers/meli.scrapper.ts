import { getHtml, cheerioInstance } from '../utils/scrapper.functions';
import IScrap from '../interface/IScrap';

export const meliScrapper = async (query: string) => {
  const url = `https://lista.mercadolivre.com.br/${query.split(' ').join('-')}`;
  const html = await getHtml(url);
  const extract = await cheerioInstance(html);

  const webScrap: IScrap[] = [];

  const wrapper = '.ui-search-result__wrapper';


  extract(wrapper).each((_, element) => {
    let image: string | undefined = '';
    if (extract(element).find('.shops__image-element').attr('src')?.split(':')[0] === 'data') {
      image = extract(element).find('.shops__image-element').attr('data-src');
    } else {
      image = extract(element).find('.shops__image-element').attr('src');
    }
    const title = extract(element).find('.ui-search-item__title').text();
    const priceElement = extract(element).find('.ui-search-price__second-line')[0];
    const price = extract(priceElement).find('.price-tag-amount').text();
    const link = extract(element).find('.ui-search-link').attr('href');
    webScrap.push({ title, price, link, image });
  })
  return webScrap;
}