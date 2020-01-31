import Mithril from 'mithril';

export interface RequestErrorResponse extends JSON {
    errors?: {
        code: string;
        source?: {
            pointer: string;
        };
    }[];
}

export default class RequestError {
    status: number;
    responseText: string;
    options: Mithril.RequestOptions;
    xhr: XMLHttpRequest;
    response?: RequestErrorResponse;
    alert?: Mithril.Vnode;

    constructor(status, responseText, options, xhr) {
        this.status = status;
        this.responseText = responseText;
        this.options = options;
        this.xhr = xhr;

        try {
            this.response = JSON.parse(responseText);
        } catch (e) {
            this.response = null;
        }

        this.alert = null;
    }
}
