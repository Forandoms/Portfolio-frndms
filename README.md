# Modern Portfolyo Web Sitesi

Bu proje, React, TypeScript ve Vite kullanılarak oluşturulmuş modern bir portfolyo web sitesidir. Gemini AI entegrasyonu ve Formspree iletişim formu içerir.

## Özellikler

- Responsive tasarım
- Türkçe arayüz
- Beceriler ve projeler bölümleri
- Gemini AI entegrasyonu ile AI İçgörüleri bölümü
- Formspree ile çalışan iletişim formu
- Koyu tema

## Kurulum

1. Projeyi klonlayın:
   ```bash
   git clone <repo-url>
   cd project
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

3. `.env.example` dosyasını `.env` olarak kopyalayın ve gerekli API anahtarlarını ekleyin:
   ```bash
   cp .env.example .env
   ```
   
   `.env` dosyasını açın ve şu değerleri güncelleyin:
   - `VITE_GEMINI_API_KEY`: Gemini AI API anahtarınız
   - `VITE_FORMSPREE_FORM_ID`: Formspree form ID'niz

4. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

## Derleme ve Dağıtım

### Yerel Derleme

Projeyi derlemek için:

```bash
npm run build
```

Derlenen dosyalar `dist` klasöründe oluşturulacaktır.

### Netlify'da Dağıtım

1. [Netlify](https://www.netlify.com/)'da bir hesap oluşturun
2. Yeni bir site oluşturun ve GitHub/GitLab/Bitbucket reponuzu bağlayın
3. Aşağıdaki ayarları yapılandırın:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Environment variables bölümünde `.env` dosyasındaki değişkenleri ekleyin:
   - `VITE_GEMINI_API_KEY`
   - `VITE_FORMSPREE_FORM_ID`
5. Deploy butonuna tıklayın

### Netlify'da Beyaz Ekran Sorunu Çözümü

Eğer Netlify'da beyaz ekran sorunu yaşıyorsanız, aşağıdaki adımları izleyin:

1. Projenin kök dizininde `netlify.toml` dosyasının olduğundan emin olun (bu dosya zaten oluşturuldu)
2. `public/_redirects` dosyasının olduğundan emin olun (bu dosya zaten oluşturuldu)
3. `vite.config.ts` dosyasında `base: './'` ayarının olduğundan emin olun
4. Netlify'da yeniden deploy edin

## Teknolojiler

- React
- TypeScript
- Vite
- Tailwind CSS
- Formspree
- Gemini AI API

## Lisans

MIT