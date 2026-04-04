"use client";
export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#FF9933' }}>BHARAT SWAP</h1>
      <h3 style={{ color: '#138808' }}>Official BUSD Exchange</h3>
      <div style={{ margin: '20px', padding: '20px', border: '2px solid #FF9933', borderRadius: '15px', display: 'inline-block' }}>
        <p><strong>Bharat USD (BUSD) Address:</strong></p>
        <p style={{ fontSize: '12px' }}>0x25d34817D4205fE605b4C65Ed3Be83C85107d333</p>
        <button style={{ background: '#000080', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
          Connect to Arbitrum
        </button>
      </div>
    </div>
  );
}
