const BOT_TOKEN = '8029330782:AAEyw2Apwu8sNg2EQ84VHaj69eam6I4gDfU'

async function sendTelegramMessage(text, chatId='-4790930950') {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
    const payload = {chat_id: chatId, text }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })

        const data = await response.json()
        if (!data.ok) {
            throw new Error(`Ошибка API: ${data.error_code} — ${data.description}`)
        }
    } 
    catch (err) {}
}

export default sendTelegramMessage