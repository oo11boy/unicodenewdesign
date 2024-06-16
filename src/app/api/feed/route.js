import { API_URL } from "../../../../ApiUrl";

export async function getdata() {
  const res = await fetch(`${API_URL}/getposts`, { cache: "no-cache" });
  const data = await res.json();
  return data;
}

export async function GET() {
  try {
    const dataposts = await getdata();
    const feed = `<?xml version="1.0" encoding="UTF-8" ?>
      <rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
        <channel>
          <title>فید طراحی سایت یونیکد</title>
          <link>https://unicodewebdesign.com</link>
          <description>This is my blog where I share my thoughts.</description>
          <language>FA-IR</language>
          ${dataposts.map((post) => `
            <item>
              <title><![CDATA[${post.metatitle}]]></title>
              <link>https://unicodewebdesign.com/Blog/${post.link}</link>
              <description><![CDATA[${post.metadescription}]]></description>
            </item>
          `).join("")}
        </channel>
      </rss>`;

    return new Response(feed, {
      status: 200,
      headers: { "Content-Type": "application/rss+xml; charset=UTF-8" },
    });
  } catch (error) {
    console.error("Error generating RSS feed:", error);
    return new Response("Error generating RSS feed", { status: 500 });
  }
}
