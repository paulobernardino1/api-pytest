import { test, expect } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LojinhaPage from '../support/pages/LojinhaPage';

test.describe('Lojinha de informática do Luiz Miguel', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let lojinhaPage: LojinhaPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.lojinha')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    lojinhaPage = new LojinhaPage(page);
    
    // Configurações adicionais para evitar timeouts
    await page.setDefaultTimeout(60000); // 60 segundos
    await page.setDefaultNavigationTimeout(60000);
    
    // Navega para a URL base
    await page.goto(BASE_URL, { 
      waitUntil: 'networkidle',
      timeout: 60000 
    });
    
    // Aguarda a página estar totalmente carregada
    await page.waitForLoadState('domcontentloaded');
  });

  test('Pesquisar uma impressora HP e validar o produto', async ({ page }) => {
    // Adiciona timeout específico para este teste
    test.setTimeout(180000); // 3 minutos
    
    try {
      // Verifica se a página carregou corretamente
      await expect(page).toHaveURL(new RegExp(BASE_URL));
      
      // Executa a pesquisa
      await lojinhaPage.pesquisarAImpressora();
      
      // Valida os resultados da pesquisa
      await lojinhaPage.validarPesquisa();
      
      // Valida os detalhes do produto
      await lojinhaPage.validarProdutoDetalhe();
      
    } catch (error) {
      // Captura screenshot em caso de erro
      await page.screenshot({ 
        path: `test-results/error-${Date.now()}.png`,
        fullPage: true 
      });
      
      console.error('Erro no teste:', error);
      throw error;
    }
  });
});