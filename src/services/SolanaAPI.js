import * as solanaWeb3 from '@solana/web3.js';
import Config from "react-native-config";

let Buffer = require('buffer/').Buffer;

function createConnection(): solanaWeb3.Connection {
    return new solanaWeb3.Connection(
        "https://ssc-dao.genesysgo.net/",
        'confirmed',
    );
}

function generateKeypair(): solanaWeb3.Keypair {
    return new solanaWeb3.Keypair.fromSeed(Uint8Array.from(Buffer.from(Config.WALLET_SEED_KEY, 'hex')));
}

export const confirmBlockId = async (toPublicKey: string): Promise<solanaWeb3.TransactionSignature> => {
    const generatedKeypair: solanaWeb3.Keypair = generateKeypair();

    // Create transaction transfer.
    const transferTransaction = new solanaWeb3.Transaction().add(
        solanaWeb3.SystemProgram.transfer({
            fromPubkey: generatedKeypair.publicKey,
            toPubkey: new solanaWeb3.PublicKey(toPublicKey),
            lamports: 0,
        }),
    );

    // Add transaction instruction.
    await transferTransaction.add(
        new solanaWeb3.TransactionInstruction({
            keys: [{
                pubkey: generatedKeypair.publicKey,
                isSigner: true,
                isWritable: true
            }],
            data: Buffer.from('BlockID Verification', 'utf-8'),
            programId: new solanaWeb3.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
        })
    )

    // Sign transaction, broadcast, and confirm
    return solanaWeb3.sendAndConfirmTransaction(
        createConnection(),
        transferTransaction,
        [generatedKeypair],
        {commitment: 'confirmed'}
    );
}
