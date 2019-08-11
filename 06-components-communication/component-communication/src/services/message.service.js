/**
 * create communication branch
 * publish to the branch
 * subscribe to the branch
 */

import {Subject} from 'rxjs';

class MessageService {
    
    // this.messageChannel.next('hello world')
    // this.messageChannel.subscribe(() => ...)
    constructor() {
        this.messageChannel = new Subject();
    }

}

export default new MessageService();