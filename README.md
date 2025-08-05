# 🚀 Eymen Ali Şahin - Portfolio Website

Modern, responsive ve AI destekli portfolio websitesi. React, TypeScript, Tailwind CSS ve Vite kullanılarak geliştirilmiştir.

## ✨ Özellikler

- 🎨 **Modern Tasarım** - Temiz ve profesyonel görünüm
- 📱 **Responsive** - Tüm cihazlarda mükemmel görünüm
- 🤖 **AI Sohbet** - Gemini AI ile interaktif asistan
- 📝 **Contact Form** - Formspree entegrasyonu
- 📄 **CV Download** - Tek tıkla CV indirme
- ⚡ **Hızlı** - Vite ile optimize edilmiş performans
- 🎯 **SEO Friendly** - Arama motorları için optimize

## 🛠️ Teknolojiler

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Build Tool:** Vite
- **AI:** Google Gemini API
- **Forms:** Formspree
- **Deployment:** Netlify
- **Icons:** Lucide React

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**
```bash
git clone <repository-url>
cd project
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Environment variables ayarlayın**
`.env` dosyası oluşturun:
```env
VITE_FORMSPREE_FORM_ID=your-formspree-form-id
VITE_GEMINI_API_KEY=your-gemini-api-key
```

4. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

5. **Production build**
```bash
npm run build
```

## 📁 Proje Yapısı

```
project/
├── public/
│   ├── cv.pdf          # CV dosyası
│   └── ...
├── src/
│   ├── components/     # React bileşenleri
│   ├── data/          # Portfolio verileri
│   ├── types/         # TypeScript tipleri
│   └── ...
├── netlify.toml       # Netlify konfigürasyonu
└── README.md
```

## 🔧 Konfigürasyon

### Environment Variables

| Variable | Açıklama | Gerekli |
|----------|----------|---------|
| `VITE_FORMSPREE_FORM_ID` | Formspree form ID'si | ✅ |
| `VITE_GEMINI_API_KEY` | Gemini API key'i | ✅ |

### API Key'leri Alma

#### Formspree
1. [Formspree.io](https://formspree.io) adresine gidin
2. Yeni form oluşturun
3. Form ID'nizi kopyalayın

#### Gemini API
1. [Google AI Studio](https://makersuite.google.com/app/apikey) adresine gidin
2. Yeni API key oluşturun
3. API key'inizi kopyalayın

## 🚀 Deployment

### Netlify (Önerilen)

1. **Netlify Dashboard'da environment variables ayarlayın:**
   - `VITE_FORMSPREE_FORM_ID`
   - `VITE_GEMINI_API_KEY`

2. **Repository'yi Netlify'a bağlayın**

3. **Build ayarları:**
   - Build command: `npm run build`
   - Publish directory: `dist`

### Diğer Platformlar

- **Vercel:** Otomatik algılanır
- **GitHub Pages:** `npm run build` sonrası `dist` klasörünü deploy edin

## 📝 Özelleştirme

### Portfolio Verilerini Güncelleme

`src/data/portfolio.ts` dosyasını düzenleyin:

```typescript
export const personalInfo = {
  name: "Adınız",
  title: "Unvanınız",
  bio: "Kısa açıklama",
  // ...
};
```

### CV Güncelleme

`public/cv.pdf` dosyasını değiştirin.

### Renkler ve Tema

`tailwind.config.js` dosyasında renkleri özelleştirin.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Website:** [https://portfolyoshn.netlify.app/](https://portfolyoshn.netlify.app/)
- **Email:** [email adresiniz]
- **LinkedIn:** [LinkedIn profiliniz]

## 🙏 Teşekkürler

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Formspree](https://formspree.io/)
- [Google Gemini](https://ai.google.dev/)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!