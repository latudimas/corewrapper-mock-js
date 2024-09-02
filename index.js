require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my API!' });
});

app.post('/api/echo', (req, res) => {
  res.json({ message: 'You sent:', data: req.body });
});

app.post('/api/v1/loan/limit-get', (req, res) => {
  try {
    const { aditionalDataPrivate } = req.body;
    const additionalData = JSON.parse(aditionalDataPrivate);

    if (additionalData.limitProduct === '6200' && additionalData.customerNo === '184047') {
      res.json({
        message: "success",
        data: {
          responseDescription: "Transaction Success",
          responseCode: "00",
          aditionalDataPrivate: "[{\"id\":\"184047.0006200.01\",\"name\":\"Wahyu Trisna Wijaya\",\"approvalDateStr\":\"20230217\",\"expiryDateStr\":\"20240502\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"200000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"0330/6200/052023\",\"noPkLimitEnd\":\"0330/6200/052023\",\"tglPkAwal\":\"20230502\",\"tglPkAkhir\":\"20230502\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UK\",\"sidSifatKredit\":\"99\",\"sidJenisPengunaan\":\"25\",\"sidOrientasiPeggunaan\":\"1\",\"sidSektorEkonomi\":\"1131\",\"nilaiProyek\":\"\",\"sidLokasiProyek\":\"\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"0\",\"tglLoanStr\":\"20230502\",\"altLimitId\":\"\",\"maximumTotal\":\"200000000.00\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20230217\",\"reviewFrequency\":\"20240502M1201\",\"offeredUntil\":\"20230217\",\"onlineLimitDateStr\":\"20230217\",\"cifMnemonic\":\"IR184047\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]",
        },
        status: true
      });
    } else {
      res.status(400).json({ error: 'Invalid Request Data' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Invalid JSON in request body' });
  }
});

app.post('/api/v1/inquiry-loan', (req, res) => {
  try {
    const { aditionalDataPrivate, fromAccount } = req.body;

    // Prepare the response
    const responseSuccess = {
      message: 'success',
      data: {
        responseDescription: 'Transaction Success',
        responseCode: '00',
        aditionalDataPrivate: ""
      },
      status: true
    };

    if (aditionalDataPrivate === "194868        1000" && fromAccount == "194848") {
      responseSuccess.data.aditionalDataPrivate = "194868         0001LD2404464849       IDR00001000000000002420240213202602132024051300006000000091671249130000004169271331001937762         21069  6400.01   MERCHLIN  CUR        000000416927133ID0010002   ";
    } else if (aditionalDataPrivate === "194955        1000" && fromAccount == "194955") {
      responseSuccess.data.aditionalDataPrivate = "194955        10011LD2431300309       IDR00000010000000005W20241108202412132024121301300000000001000000000000000012500001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   LD2431301781       IDR00000010000000002W20241108202411222024112201300000000001000000000000000005000001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   LD2431302107       IDR00000010000000006W20241108202412202024122001300000000001000000000000000015000001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   LD2431306047       IDR00000100000000000320241108202502082024120801200000000010000000000000003400221121001938688         21069  6400.01   MERCHLIN  CUR        000000340022112ID0010002   LD2431307079       IDR00000010000000001W20241108202411152024111501300000000000997425000000000002500001001938688         21069  6200.01   MERCHLD   LIQ  PDO   000000000000000ID0010002   LD2431317297       IDR00000010000000001W20241108202411152024111501300000000001007500000000000002500001001938688         21069  6200.01   MERCHLD   LIQ  PDO   000000000000000ID0010002   LD2431331860       IDR00000010000000002W20241108202411222024112201300000000001000000000000000005000001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   LD2431341070       IDR00000010000000001W20241108202411152024111501300000000001007500000000000002500001001938688         21069  6200.01   MERCHLD   LIQ  PDO   000000000000000ID0010002   LD2431349026       IDR00000010000000001W20241108202411152024111501300000000001007500000000000002500001001938688         21069  6200.01   MERCHLD   LIQ  PDO   000000000000000ID0010002   LD2431360149       IDR00000010000000003W20241108202411292024112901300000000001000000000000000007500001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   LD2431373330       IDR00000010000000004W20241108202412062024120601300000000001000000000000000010000001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   "
    }

    // Send the response
    res.json(responseSuccess);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(400).json({ error: 'Invalid request data' });
  }
});

app.post('/api/pause-cw', async (req, res) => {
  const projectId = process.env.PROJECT_ID;
  const vercelToken = process.env.VERCEL_TOKEN;
  const route = `${projectId}/pause?`;

  try {
    const response = await fetch(`https://api.vercel.com/v1/projects/${route}`, {
      method: `POST`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${vercelToken}`,
      },
    });

    if (response.ok) {
      res.status(200).json({ message: "Corewrapper mock service successfully paused" });
    } else {
      res.status(response.status).json({ message: "Corewrapper mock service successfully paused" });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' })
  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
