const colName = 'blog';

export class BlogService {
  async saveArticle(item) {
    await db.collection(colName).inserOne(item);
    return;
  }

  async getArticle(slug) {
    return await db.collection(colName).findOne({ slug });
  }

  async getAll() {
    const cursor = await db.collection(colName).find({});
    const results = await cursor.toArray();
    return results;
  }
}
