import { API_URL } from "../../../ApiUrl";
// تابع برای پاکسازی کلمات کلیدی از فضاهای اضافی در ابتدای و انتهای آن‌ها
function cleanKeyword(keyword) {
    return keyword.trim(); // حذف فاصله‌های اضافی در ابتدا و انتهای رشته
  }
  
  export async function getdata() {
    const res = await fetch(`${API_URL}/getposts`, { cache: "no-cache" });
    const data = await res.json();
    return data;
  }
  
  export default async function sitemap() {
    const dataposts = await getdata();
  
    // استفاده از Set برای نگه داشتن کلمات کلیدی منحصر به فرد
    const uniqueKeywords = new Set();
  
    // جمع آوری کلمات کلیدی منحصر به فرد از تمام داده ها
    dataposts.forEach((item) => {
      const words = item.keyword.split(/[،،,]\s*/);
      words.forEach((word) => {
        const cleanedWord = cleanKeyword(word);
        uniqueKeywords.add(cleanedWord);
      });
    });
  
    // تبدیل Set به آرایه
    const uniqueKeywordsArray = [...uniqueKeywords];
  
    // ایجاد تگ‌ها با استفاده از کلمات کلیدی منحصر به فرد
    const tags = uniqueKeywordsArray.map((word) => ({
      keyword: word,
      url: `https://unicodewebdesign.com/tags/${encodeURIComponent(word)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    }));
  
    return tags;
  }
  