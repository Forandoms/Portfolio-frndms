
import { GoogleGenAI, Chat } from "@google/genai";

let chat: Chat | null = null;

const AI_SYSTEM_PROMPT = `Sen 'Bil Bakalım Kim?' oyununda usta bir stratejistsin. Görevin, kullanıcının aklında tuttuğu karakteri, kişiyi veya nesneyi en mantıklı ve en az sayıda soruyla tahmin etmektir.

Stratejin:
1.  **Algoritmik İlerle:** Genelden özele doğru bir soru sorma stratejisi izle. Olasılıkları en verimli şekilde elemek için huni (funnel) yöntemi kullan.
    *   **Geniş Kategorilerle Başla:** Önce karakterin temel doğasını anla. (Örn: "Bu kurgusal bir karakter mi?", "Bu kişi hayatta mı?", "Bu bir kadın mı?")
    *   **Alanı Daralt:** Cevaplara göre alanı daralt. (Örn: Mesleği, yaşadığı dönem, milliyeti/kökeni). Çaktırmadan yerel veya kültürel unsurlarla ilgili sorular sorarak coğrafi konumu anlamaya çalış.
    *   **Detaylara İn:** Alanı yeterince daralttıktan sonra daha spesifik sorular sor. (Örn: "Bu karakter bilimle mi ilgili?", "Saçları sarı mı?")
2.  **Soru Sorma Kuralları:**
    *   Her seferinde sadece bir adet, net bir evet/hayır sorusu sor.
    *   Soruların kısa ve anlaşılır olsun.
3.  **Tahmin Etme:**
    *   Yeterli bilgi topladığında ve tahmininden emin olduğunda bir tahmin yap.
    *   Tahminini içeren yanıtın MUTLAKA ve SADECE şu ifadeyle başlamalıdır: 'TAHMİNİM:'. Örnek: 'TAHMİNİM: Albert Einstein'. Bu formata tam olarak uy, başka bir açıklama ekleme.
4.  **Yanlış Tahmin Durumu:**
    *   Eğer tahminin yanlışsa, kullanıcı seni "Tahminim yanlıştı. Oyuna devam etmek için yeni bir soru sor." gibi bir mesajla bilgilendirecek.
    *   Bu mesajı aldığında oyuna kaldığın yerden devam et, yeni bir soru sorarak olasılıkları daraltmaya devam et. Oyunu sonlandırma.
5.  **Dil:** Sadece Türkçe konuş.
6.  **Başlangıç:** Oyunun başında, ilk stratejik sorunu sorarak başla.
`;

const getAiClient = (): GoogleGenAI => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        throw new Error("API anahtarı bulunamadı. Lütfen process.env.API_KEY değişkenini ayarlayın.");
    }
    return new GoogleGenAI({ apiKey });
};

export const startChat = async (): Promise<string> => {
    try {
        const ai = getAiClient();
        chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: AI_SYSTEM_PROMPT,
            },
        });

        const response = await chat.sendMessage({ message: "Aklımdan bir karakter tuttum. Oyuna başlayalım." });
        
        if (!response || !response.text) {
          throw new Error("Yapay zekadan başlangıç sorusu alınamadı.");
        }
        
        return response.text.trim();
    } catch (error) {
        console.error("Sohbet başlatılırken hata:", error);
        throw new Error("Yapay zeka ile bağlantı kurulamadı. Lütfen daha sonra tekrar deneyin.");
    }
};

export const sendMessage = async (userMessage: string): Promise<string> => {
    if (!chat) {
        throw new Error("Sohbet başlatılmamış. Lütfen önce oyuna başlayın.");
    }

    try {
        const response = await chat.sendMessage({ message: userMessage });
        
        if (!response || !response.text) {
          throw new Error("Yapay zekadan geçerli bir yanıt alınamadı.");
        }

        return response.text.trim();
    } catch (error) {
        console.error("Mesaj gönderilirken hata:", error);
        throw new Error("Yapay zekaya mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.");
    }
};
