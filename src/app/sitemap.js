import { API_URL, Site_URL } from "../../ApiUrl";

export async function getdata() {
  const res = await fetch(`${API_URL}/getposts`, { cache: "no-cache" });
  const data = await res.json();
  return data;
}

export async function getdataproduct() {
  const res = await fetch(`${API_URL}/getproduct`, { cache: "no-cache" });
  const data = await res.json();
  return data;
}


export async function getdatamaincat() {
  const res = await fetch(`${API_URL}/getMainCat`, { cache: "no-cache" });
  const data = await res.json();
  return data;
}

export default async function sitemap() {
  const dataposts = await getdata();
  const posts = dataposts.map((item) => ({
    url: `https://unicodewebdesign.com/Blog/${item.link}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const dataproduct = await getdataproduct();
  const products = dataproduct.map((item) => ({
    url: `https://unicodewebdesign.com/shop/${item.link}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const datamaincat = await getdatamaincat();
  const maincat = datamaincat.map((item) => ({
    url: `https://unicodewebdesign.com/main/${item.link}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  }));
  return [
    {
      url: `https://unicodewebdesign.com`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `https://unicodewebdesign.com/store_design`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `https://unicodewebdesign.com/company_design`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `https://unicodewebdesign.com/goodprice_design`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `https://unicodewebdesign.com/pez_design`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `https://unicodewebdesign.com/Blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...maincat,...products, ...posts
  ];
}
