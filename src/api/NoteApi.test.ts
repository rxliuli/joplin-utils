import { noteApi } from './NoteApi';
import { setupTestEnv } from './SetupTestEnv';

describe('test JoplinApi', () => {
  beforeAll(() => {
    setupTestEnv();
  });
  const folderId = '1dbc83a4ffae4cc8911534d1d013ae72';
  const noteId = '2538240060064c88baf9fdd60b1513d9';
  it('test list', async () => {
    const res = await noteApi.list();
    console.log(res);
    expect(res.length).toBeGreaterThan(0);
  });
  it('test get', async () => {
    const res = await noteApi.get(noteId);
    console.log(res);
    expect(res.title).toBe('# 测试笔记');
  });
  it('test create', async () => {
    const res = await noteApi.create({
      title: '# test',
      body: '## 测试内容',
      parent_id: folderId
    });
    console.log(res);
    expect(res.id).not.toBeNull();
    expect(res.parent_id).toBe(folderId);
  });
  it('test update', async () => {
    const title = `# 测试笔记标题修改 ${Date.now()}`;
    const body = `测试笔记内容修改 ${Date.now()}`;
    const res = await noteApi.update({
      id: noteId,
      title,
      body
    });
    console.log(res);
    expect(res.title).toBe(title);
    expect(res.body).toBe(body);
  });
  it('test remove', async () => {
    const id = 'a135c13637d34e59a289d670b639da0d';
    const createRes = await noteApi.create({
      id,
      title: '# 测试标题',
      body: '测试内容',
      parent_id: folderId
    });
    expect(createRes.id).not.toBeNull();
    const res = await noteApi.remove(createRes.id);
    console.log(res);
    expect(res).toBe('');
  });
  it('test tagsById', async () => {
    const tagList = await noteApi.tagsById(noteId);
    console.log(tagList);
    expect(tagList.length).toBeGreaterThan(0);
  });
  it('test resourcesById', async () => {
    const resourceList = await noteApi.resourcesById(noteId);
    console.log(resourceList);
    expect(resourceList.length).toBeGreaterThan(0);
  });
});
