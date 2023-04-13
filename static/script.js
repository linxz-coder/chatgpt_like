 document.getElementById('submit-btn').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;
    const responseElement = document.getElementById('response');

    if (userInput) {
        responseElement.textContent = '思考中...';
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({input: userInput})
            });
            const jsonResponse = await response.json();
            responseElement.innerHTML = marked.parse(jsonResponse.output);
        } catch (error) {
            // 处理错误
            console.error('请求错误:', error);
            responseElement.textContent = '请求出错，请重试';
        }
    } else {
        responseElement.textContent = '';
    }
});
