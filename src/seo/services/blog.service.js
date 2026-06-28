import { slugify } from "../utils/slug";
import { readingTime } from "../utils/readingTime";

export function createBlogPostMeta({ title, description, category = "IA para negócios", body = "" }) {
  return {
    slug: slugify(title),
    title,
    description,
    category,
    readingTime: readingTime(body || description || title),
    schemaType: "Article"
  };
}
