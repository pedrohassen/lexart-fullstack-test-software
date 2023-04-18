import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

export const getHtml = async (url: string): Promise<string> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const html = await page.content();
  await browser.close();
  return html;
}

export const cheerioInstance = async (html: string): Promise<cheerio.CheerioAPI> => {
  return cheerio.load(html);
}