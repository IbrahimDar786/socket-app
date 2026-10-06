const API_BASE_URL = 'http://localhost:5000/api';

export const getMessages = async (conversationId, token) => {
    const response = await fetch(
        `${API_BASE_URL}/conversations/${conversationId}/messages`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch messages');
    }

    return response.json();
};


export const getConversations = async (token) => {
    const response = await fetch(`${API_BASE_URL}/conversations`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch conversations');
    }

    return response.json();
};


