import { SignalClient } from '@algorandecosystem/liquid-client/signal';
import { Transaction } from 'algosdk';
import { LiquidOptions } from './interfaces.js';
export declare class LiquidAuthClient {
    client: SignalClient;
    private options;
    RTC_CONFIGURATION: RTCConfiguration;
    private dataChannel;
    linkedBool: boolean;
    private modalElement;
    private requestId;
    private eventListeners;
    constructor(options: LiquidOptions);
    connect(): Promise<string>;
    disconnect(): Promise<void>;
    setDataChannel(dc: RTCDataChannel): void;
    logOutSession(): Promise<boolean>;
    signTransactions<T extends Transaction[] | Uint8Array[]>(txnGroup: T | T[], activeAddress: string, _indexesToSign?: number[]): Promise<(Uint8Array | null)[]>;
    showModal(requestId: string): Promise<string>;
    hideModal(): void;
    private handleDataChannel;
    private handleOfferClient;
    cleanUp(): void;
}
