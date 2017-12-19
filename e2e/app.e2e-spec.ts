import { FireFotosPage } from './app.po';

describe('fire-fotos App', () => {
  let page: FireFotosPage;

  beforeEach(() => {
    page = new FireFotosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
