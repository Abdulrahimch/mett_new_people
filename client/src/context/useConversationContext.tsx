import { Iconversation } from "../interface/Conversation";
import { createContext, FunctionComponent, useCallback, useContext, useEffect, useState } from 'react';
import { getConversations } from '../helpers/APICalls/conversation';

interface IConversationContext {
    conversations: Iconversation[];
    currentConversation: Iconversation;
    updateConversationContext: (data: Iconversation[]) => void;
    updateCurrentConversation: (conversationContent: Iconversation) => void;
};

export const ConversationContext = createContext<IConversationContext>({
    conversations: [],
    currentConversation: undefined,
    updateConversationContext: () => null,
    updateCurrentConversation: () => null
});

export const ConversationProvider: FunctionComponent  = ({ children }): JSX.Element => {
    const [conversations, setConversations] = useState<Iconversation[] | null | undefined>([]);
    const [currentConversation, setCurrentConversation] = useState<Iconversation | null | undefined>(null);
    
    const updateConversationContext = useCallback((data: Iconversation[]) => {
        setConversations(data);
    }, []);
    const updateCurrentConversation = useCallback((conversationContent: Iconversation) => {
        setCurrentConversation(conversationContent)
    }, []);

    useEffect(() => {
        getConversations().then((data) => {
            if (data.success) {
                updateConversationContext(data.success.conversations);
            } else return 
        })
    }, [updateConversationContext]);

    return (
            <ConversationContext.Provider
                value={{ conversations, currentConversation, updateConversationContext, updateCurrentConversation }}
            >
            {children}
            </ConversationContext.Provider>
    );
}; 

export function useConversation(): IConversationContext {
    return useContext(ConversationContext);
};

