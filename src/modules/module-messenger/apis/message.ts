import { FIREBASE_SET, FIREBASE_UPDATE, FIREBASE_REMOVE } from '@module-base/apis/Firebase';
import { Encrypt } from '@module-base/utils/security/Cipher';
import { fork, select } from 'redux-saga/effects';
import { chatBotMessage, chatBotSay } from '../constants/Message';
import { doSendMessageProps, doRemoveMessageProps, doDeleteMessageProps } from './inteface.message';
import { emptyArray } from '@module-base/constants/object';
import { getPrevMessageId } from '../selectors/message';

/** Api send message */
function* apiSendMessage(payload: doSendMessageProps): any {
    const { threadId, meId, messageData, isGroup = false, isFirstMessage = false } = payload;
    const { mid } = messageData;
    if (!threadId) {
        console.log('apiSendMessage::lost threadId!!!');
        return null;
    }

    const isChatBot = threadId === 'cid-chatbot';

    if (isFirstMessage) {
        /** set to threadIds of me */
        yield fork(FIREBASE_SET, { path: `/messengers/${meId}/threadIds/${threadId}`, data: { id: threadId } });
    }

    if (isChatBot) {
        /** send to me */
        yield fork(FIREBASE_SET, { path: `/messengers/${meId}/threads/${threadId}/${mid}/`, data: messageData });
        const { type } = messageData;
        // @ts-ignore
        const content = chatBotSay[type][Math.floor(Math.random() * 10)];
        const messCB = chatBotMessage('text', content);
        /** set last message to history of me */
        yield fork(FIREBASE_UPDATE, { path: `/history/${meId}/`, data: { ['cid-chatbot']: messCB.mid } });
        yield fork(FIREBASE_SET, { path: `/messengers/${meId}/threads/${threadId}/${messCB.mid}/`, data: messCB });
        return null;
    }

    /** set last message to history of me */
    yield fork(FIREBASE_UPDATE, { path: `/history/${meId}/`, data: { [threadId]: mid } });
    const isMyCloud = threadId === 'cid-mycloud';
    if (isMyCloud) {
        /** send to me */
        yield fork(FIREBASE_SET, { path: `/messengers/${meId}/threads/${threadId}/${mid}/`, data: messageData });
        return null;
    }

    const partnerId = `uid-${threadId.split('-')[1]}`;
    const partnerThreadId = `cid-${meId.split('-')[1]}`;
    /** set last message to history of partner */
    yield fork(FIREBASE_UPDATE, { path: `/history/${partnerId}/`, data: { [partnerThreadId]: mid } });

    if (!isGroup) {
        if (isFirstMessage) {
            /** set to threadIds of partner */
            yield fork(FIREBASE_SET, {
                path: `/messengers/${partnerId}/threadIds/${partnerThreadId}`,
                data: { id: partnerThreadId },
            });
        }
        /** send to me */
        yield fork(FIREBASE_SET, { path: `/messengers/${meId}/threads/${threadId}/${mid}/`, data: messageData });
        /** send to partner */
        yield fork(FIREBASE_SET, { path: `/messengers/${partnerId}/threads/${partnerThreadId}/${mid}/`, data: messageData });
        return null;
    }

    /** send to all */
    // const getThreadIds = yield call(FIREBASE_GET, {path: `/messengers/${threadId}/`} as payloadProps);
    // getThreadIds.then((snapshot: any) => {
    //     const threadIds = snapshot.val();
    //     if (threadIds !== undefined && threadIds !== null) {
    //         threadIds.forEach(function* send(id: string) {
    //             yield fork(FIREBASE_SET, {path: `/messengers/${threadId}/${id}/${mid}/`, data: messageData} as payloadProps);
    //         });
    //     }
    // });
    return null;
}

/** Api remove message */
function* apiRemoveMessage(payload: doRemoveMessageProps) {
    const { threadId, meId, partnerId, messageId, isGroup = false } = payload;
    if (!threadId || !messageId) {
        console.log('apiRemoveMessage::lost data!!!');
        return null;
    }

    const messageContent = Encrypt('Đã thu hồi..!');
    const data = {
        data: {
            text: messageContent,
        },
        type: 'revoke',
    };

    if (!isGroup) {
        /** remove for me */
        yield fork(FIREBASE_UPDATE, { path: `/messengers/${meId}/threads/${threadId}/${messageId}/`, data });
        if (threadId !== 'cid-chatbot' && threadId !== 'cid-mycloud') {
            /** remove for partner */
            yield fork(FIREBASE_UPDATE, { path: `/messengers/${partnerId}/threads/${threadId}/${messageId}/`, data });
        }
        return null;
    }

    /** remove for all */
    // const getThreadIds = FIREBASE_GET({path: `/messengers/${threadId}/`} as payloadProps);
    // getThreadIds.then((snapshot: any) => {
    // 	const threadIds = snapshot.val();
    // 	if (threadIds !== undefined && threadIds !== null) {
    // 		threadIds.forEach(function* send(id: string) {
    // 			yield fork(FIREBASE_UPDATE, {path: `/messengers/${threadId}/${id}/${messageId}/`, data} as payloadProps);
    // 		});
    // 	}
    // });
    return null;
}

/** Api delete message */
function* apiDeleteMessage(payload: doDeleteMessageProps) {
    const { threadId, meId, messageId, files = emptyArray } = payload;

    if (!threadId || !meId || !messageId) {
        console.log('apiDeleteMessage::lost data!!!');
        return null;
    }

    // @ts-ignore
    const prevMessageId = yield select(getPrevMessageId, messageId);
    /** set last message to history of me */
    yield fork(FIREBASE_UPDATE, { path: `/history/${meId}/`, data: { [threadId]: prevMessageId } });

    yield fork(FIREBASE_REMOVE, { path: `/messengers/${meId}/threads/${threadId}/${messageId}/` });
    if (files.length > 0) {
        for (const file of files) {
            const { type, fid } = file;
            const urlRef = type.includes('image/') ? 'images/' : type.includes('video/') ? 'videos/' : 'others/';
            yield fork(FIREBASE_REMOVE, { path: `/repos/${meId}/${threadId}/${urlRef}/${fid}/` });
        }
    }
    return null;
}

export { apiRemoveMessage, apiSendMessage, apiDeleteMessage };
