import { AnagramAppPage } from './app.po';

describe('anagram-app App', () => {
  let page: AnagramAppPage;

  beforeEach(() => {
    page = new AnagramAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
