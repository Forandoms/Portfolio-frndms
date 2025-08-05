# Environment Variables Kurulumu

Bu proje için aşağıdaki environment variable'ları ayarlamanız gerekiyor:

## 1. Local Geliştirme (.env dosyası)

Proje kök dizininde `.env` dosyası oluşturun:

```env
# Formspree form ID'nizi buraya ekleyin
VITE_FORMSPREE_FORM_ID=your-formspree-form-id

# Gemini API key'inizi buraya ekleyin
VITE_GEMINI_API_KEY=your-gemini-api-key
```

## 2. Netlify Deployment

Netlify dashboard'da projenizin ayarlarına gidin:

1. **Site settings** > **Environment variables**
2. Aşağıdaki variable'ları ekleyin:
   - `VITE_FORMSPREE_FORM_ID` = Formspree form ID'niz
   - `VITE_GEMINI_API_KEY` = Gemini API key'iniz

## Nasıl Alınır?

### Formspree Form ID
1. [Formspree.io](https://formspree.io) adresine gidin
2. Yeni bir form oluşturun
3. Form ID'nizi kopyalayın (örn: `xaybcd123`)

### Gemini API Key
1. [Google AI Studio](https://makersuite.google.com/app/apikey) adresine gidin
2. Yeni bir API key oluşturun
3. API key'inizi kopyalayın

## Not
- Local geliştirme için `.env` dosyası yeterli
- Netlify deployment için environment variable'ları Netlify dashboard'da ayarlamanız gerekiyor
- API key'ler güvenlik için `.gitignore` dosyasına eklenmiştir 