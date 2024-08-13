import React, { useState } from 'react';
import { Connection, PublicKey, clusterApiUrl, Keypair, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';

const App = () => {
  const [mintAddress, setMintAddress] = useState(null);
  const [connection] = useState(new Connection(clusterApiUrl('devnet'), 'confirmed'));

  const createMint = async () => {
    const mintAuthority = Keypair.generate();
    const payer = Keypair.generate();

    const airdropSignature = await connection.requestAirdrop(
      payer.publicKey,
      2 * LAMPORTS_PER_SOL
    );
    await connection.confirmTransaction(airdropSignature);

    const mint = await Token.createMint(
      connection,
      payer,
      mintAuthority.publicKey,
      null,
      9,
      TOKEN_PROGRAM_ID
    );

    setMintAddress(mint.publicKey.toString());
  };

  const transferToken = async (destinationAddress) => {
    const payer = Keypair.generate();
    const mintPublicKey = new PublicKey(mintAddress);
    const token = new Token(connection, mintPublicKey, TOKEN_PROGRAM_ID, payer);

    const fromTokenAccount = await token.getOrCreateAssociatedAccountInfo(payer.publicKey);
    const toTokenAccount = await token.getOrCreateAssociatedAccountInfo(new PublicKey(destinationAddress));

    await token.mintTo(
      fromTokenAccount.address,
      payer.publicKey,
      [],
      1000000
    );

    await token.transfer(
      fromTokenAccount.address,
      toTokenAccount.address,
      payer.publicKey,
      [],
      1000000
    );
  };

  return (
    <div>
      <button onClick={createMint}>Create Token</button>
      {mintAddress && (
        <>
          <p>Mint Address: {mintAddress}</p>
          <button onClick={() => transferToken('目標地址')}>Transfer Token</button>
        </>
      )}
    </div>
  );
};

export default App;
