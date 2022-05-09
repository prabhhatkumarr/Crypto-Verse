import React from 'react';
import Card from './Components/Card';
import CryptoVerse1 from './Images/CryptoVerse1.jpg';
import AboutBC from './Images/AboutBC.png';
import Blockchain1 from './Images/Blockchain1.png';
import Test from './Images/Test.jpg';
// import Yellow from './Images/Yellow.jpg'
// import Finall from './Images/Finall.jpg'
// import Test from './Images/Test.jpg'
import './App.css'


function App() {
  return (
    <div className="App">



      <div className='Top'>
        <div className='imgBox'>
          <img src={CryptoVerse1} alt='' className='Image1' />
        </div>

        <div className='Wrapper1'>
          <h2 className='Heading'>Crypto-Verse</h2>


        </div>
      </div>
      {/* <p className='Content'>CryptoVerse provides all the insightful and updated news associated <br />
            and related to Test and Bitcoin.</p> */}
      <div className='Row1'>
        <Card
          img={AboutBC}
          title="What is Blockchain?"
          details="A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party." />
        <Card
          img={Blockchain1}
          title="How does Blockchain work?"
          details="The goal of blockchain is to allow digital information to be recorded and distributed, but not edited. In this way, a blockchain is the foundation for immutable ledgers, or records of transactions that cannot be altered, deleted, or destroyed. This is why blockchains are also known as a distributed ledger technology (DLT)." />
        <Card
          img={Test}
          title="Is Blockchain Secure?"
          details="Blockchain technology achieves decentralized security and trust in several ways. To begin with, new blocks are always stored linearly and chronologically. That is, they are always added to the “end” of the blockchain. After a block has been added to the end of the blockchain, it is extremely difficult to go back and alter the contents of the block unless a majority of the network has reached a consensus to do so. That’s because each block contains its own hash, along with the hash of the block before it, as well as the previously mentioned time stamp."
        />
      </div>













    </div>
  );
}

export default App;
