import { InstagramCopyPage } from './app.po';

describe('instagram-copy App', () => {
  let page: InstagramCopyPage;

  beforeEach(() => {
    page = new InstagramCopyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
